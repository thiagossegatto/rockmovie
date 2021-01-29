import React, { useEffect } from "react";
import { Container, Card } from './styled';

import { useMovies } from '../../hooks/Movies';
import Percentage from "../../components/Percentage";
import Loading from "../../components/Loading";

import noPhoto from "../../assets/images/no_photo.png";
import NotFound from "../../components/NotFound";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { url } from "inspector";


function Discover() {
  const { movies, searchMovies, loading, firstTime } = useMovies();

  useEffect(() => {
    if (firstTime) {
      searchMovies();
    }
  }, [searchMovies, firstTime])

  return (
    <>
      <Header />
      <Container>
        <h2>Discover</h2>
        {!loading && movies.length === 0 && (
          <NotFound />
        )}
        {loading ?
          <Loading />
          : (
            <ul>
              {movies.map(item => (
                <Card key={item.id} style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}w92${item.poster_path})` }}>
                  <Link to={`details/${item.id}`}>
                    {item.poster_path ?
                      <img src={`${process.env.REACT_APP_IMAGE_URL}w342${item.poster_path}`} alt={item.title} />
                      :
                      <img src={noPhoto} alt="No available" />
                    }
                    <span>{item.title}</span>
                    <Percentage percentage={item.vote_average} />
                  </Link>
                </Card>
              ))}
            </ul>
          )
        }
      </Container>
      <Footer />
    </>
  );
}

export default Discover;
