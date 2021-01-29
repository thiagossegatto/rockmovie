import React, { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from "react";
import api from '../services/api';

interface ISearch {
  query?: string;
  'vote_average.gte'?: number,
  'vote_average.lte'?: number
}

interface IMovies {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: Date,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

interface IGenres {
  id: number,
  name: string
}

interface IGallery {
  file_path: string
}

interface IVideos {
  site: string,
  key: string,
  name: string
}

interface IMovieDetails extends IMovies {
  status: string,
  genres: IGenres[],
  gallery: IGallery[],
  videos: IVideos[],
}

interface IMoviesContext {
  movies: IMovies[],
  details: IMovieDetails | null,
  setDetails: Dispatch<SetStateAction<IMovieDetails | null>>,
  getDetails(id: number): Promise<void>,
  searchMovies(): Promise<void>,
  search: ISearch | null,
  setSearch: Dispatch<SetStateAction<ISearch | null>>,
  loading: boolean,
  firstTime: boolean
}


const MoviesContext = createContext<IMoviesContext>({} as IMoviesContext);

export const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [firstLoad, setFirstLoad] = useState<IMovies[]>([]);
  const [details, setDetails] = useState<IMovieDetails | null>(null);
  const [search, setSearch] = useState<ISearch | null>(null);
  const [lastSearch, setLastSearch] = useState<ISearch | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstTime, setFirstTime] = useState<boolean>(true);

  // get movies details by id
  const getDetails = useCallback(async (id: number): Promise<void> => {
    setLoading(true);
    let response = await api.get(`movie/${id}`);
    const responseImage = await api.get(`movie/${id}/images`);
    const responseVideo = await api.get(`movie/${id}/videos`);

    // join movies gallery
    if (responseImage.data.backdrops && responseImage.data.backdrops.length > 0) {
      response.data.gallery = responseImage.data.backdrops;
    } else {
      response.data.gallery = [];
    }

    // join movies videos
    if (responseVideo.data.results && responseVideo.data.results.length > 0) {
      response.data.videos = responseVideo.data.results;
    } else {
      response.data.videos = [];
    }

    setDetails(response.data);
    setLoading(false);
  }, []);

  // filter movies by rating when the filter has query
  const filterRating = useCallback((list: IMovies[], searchMovie: ISearch | null) => {
    if (searchMovie && searchMovie['vote_average.gte'] !== undefined && searchMovie["vote_average.lte"] !== undefined) {
      return list.filter((item: IMovies) => (
        searchMovie["vote_average.gte"] !== undefined &&
        item.vote_average >= searchMovie["vote_average.gte"]
      ) && (
          searchMovie["vote_average.lte"] !== undefined &&
          item.vote_average <= searchMovie["vote_average.lte"]
        )
      );
    }
    return list;
  }, []);

  // get movies by filter
  const searchMovies = useCallback(async (): Promise<void> => {
    setLoading(true);
    setFirstTime(false);
    let params = '';

    if (!search || (search && !search.query && !search["vote_average.lte"])) {
      if (firstLoad.length > 0) {
        setMovies(firstLoad);
      } else {
        const response = await api.get(`discover/movie`);
        setMovies(response.data.results);
        setFirstLoad(response.data.results);
      }
    } else {

      params = Object.entries(search).map(([key, val]) => `${key}=${val}`).join('&')

      if (search.query) {
        const response = await api.get(`search/movie?${params}`);
        let filterMovies: IMovies[] = filterRating(response.data.results, search);
        setMovies(filterMovies);
      } else {
        const response = await api.get(`discover/movie?${params}`);
        setMovies(response.data.results);
      }
      setLastSearch(search);
    }
    setLoading(false);
  }, [setLoading, filterRating, firstLoad, search]);

  // load movies when filters change
  useEffect(() => {
    if (search && (search.query !== lastSearch?.query || search["vote_average.gte"] !== lastSearch?.["vote_average.gte"])) {
      searchMovies();
    }
  }, [search, searchMovies, lastSearch])

  return (
    <MoviesContext.Provider
      value={{ movies, searchMovies, setSearch, loading, getDetails, details, setDetails, search, firstTime }}
    >
      {children}
    </MoviesContext.Provider>
  );

}

export const useMovies = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error('it must be used within as Provider');
  }

  return context;
}