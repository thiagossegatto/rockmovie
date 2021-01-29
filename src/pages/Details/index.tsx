import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";

import { useMovies } from '../../hooks/Movies';
import { Container, Background, Cover, Content, Infos, InfosRate, Content2, Gallery, Description } from "./styled";


function Details() {
  const [isOpenSlider, setIsOpenSlider] = useState(false);
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [current, setCurrent] = useState(0);
  const [currentVideo, setCurrentVideo] = useState<string>();

  const { id }: any = useParams();

  const { getDetails, details, setDetails } = useMovies();

  const openModal = (index: number) => {
    setCurrent(index);
    setIsOpenSlider(true);
  }

  const openModalVideo = (keyVideo: string) => {
    setCurrentVideo(keyVideo);
    setIsOpenVideo(true);
  }

  useEffect(() => {
    getDetails(id);
    return () => {
      setDetails(null)
    }
  }, [getDetails, id, setDetails])

  return (
    <>
      <Header />
      <Container>
        <Background />
        {details &&
          <>
            <Content>
              <Cover>
                <img src={`${process.env.REACT_APP_IMAGE_URL}w342${details.poster_path}`} alt={details.title} />
              </Cover>
              <Infos>
                <h1>{details.title}</h1>
                <ul>
                  {details.status && <li><span>Status: </span>{details.status}</li>}
                  {details.release_date && <li><span>Released: </span>{new Date(details.release_date).toLocaleDateString("en-US")}</li>}
                  {details.original_language && <li><span>Original Language: </span>{details.original_language}</li>}
                  {details.genres && details.genres.length > 0 &&
                    <li><span>Genres: </span>{details.genres.map((item, index) => `${item.name}${index !== details.genres.length - 1 ? ' / ' : ''}`)}</li>
                  }
                </ul>
              </Infos>
              <InfosRate>
                <span>
                  <b>{details.vote_average}</b>/10
            </span>
              </InfosRate>
              <Description>
                <h2>Overview</h2>
                <p>
                  {details.overview}
                </p>
              </Description>
            </Content>
            <Content2>
              {details.gallery.length > 0 && (
                <>
                  <h2>Gallery</h2>
                  <Gallery>
                    {details.gallery.map((item, index) =>
                      <li key={index}>
                        <img src={`${process.env.REACT_APP_IMAGE_URL}w154${item.file_path}`} alt={details.title} onClick={() => openModal(index)} />
                      </li>
                    )}
                  </Gallery>
                </>)}
              {details.videos.length > 0 && (
                <>
                  <h2>Videos</h2>
                  <Gallery>
                    {details.videos.map((item, index) =>
                      item.site === 'YouTube' &&
                      <li key={index}>
                        <img src={`http://i3.ytimg.com/vi/${item.key}/hqdefault.jpg`} alt={item.name} onClick={() => openModalVideo(item.key)} />
                      </li>
                    )}
                  </Gallery>
                </>)}
            </Content2>
          </>
        }
      </Container>
      <Footer />
      {details &&
        <Modal isOpen={isOpenSlider} closeModal={setIsOpenSlider}>
          <Slider current={current} gallery={details.gallery} setCurrent={setCurrent} />
        </Modal>
      }
      <Modal isOpen={isOpenVideo} closeModal={setIsOpenVideo}>
        <object width="100%" height="100%">
          <param name="movie" value={`//www.youtube.com/v/${currentVideo}`} />
          <embed src={`//www.youtube.com/v/${currentVideo}`} type="application/x-shockwave-flash" />
        </object>
      </Modal>
    </>
  );
}

export default Details;
