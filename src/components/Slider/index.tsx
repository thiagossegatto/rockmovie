import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { SliderS } from "./styled";
import Next from '../Icons/Next';
import Prev from '../Icons/Prev';

interface IGallery {
  file_path: string;
}

interface IProps {
  gallery: IGallery[],
  current: number,
  setCurrent: Dispatch<SetStateAction<number>>
}

function Slider({ gallery, current, setCurrent }: IProps) {
  const [qtyImages, setQtyImages] = useState(0);
  const refApp = useRef<any>();

  useEffect(() => {
    if (gallery) {
      setQtyImages(gallery.length)
    }
  }, [gallery]);

  const nextSlide = useCallback(() => {
    setCurrent(current === qtyImages - 1 ? 0 : current + 1)
  },
    [current, qtyImages, setCurrent],
  )

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? qtyImages - 1 : current - 1)
  },
    [current, qtyImages, setCurrent],
  )

  // add controller on keyboard arrows
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft' || event.keyCode === 37) {
        prevSlide();
      } else if (event.key === 'ArrowRight' || event.keyCode === 39) {
        nextSlide();
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [prevSlide, nextSlide])


  return (
    <SliderS ref={refApp}>
      <Prev onClick={() => prevSlide()} />
      <ul>
        {gallery.map((item, index) =>
          <li key={index} className={index === current ? 'active' : ''}>
            {index === current &&
              <img src={`${process.env.REACT_APP_IMAGE_URL}w500${item.file_path}`} alt={'img'} />
            }
          </li>
        )}
      </ul>
      <Next onClick={() => nextSlide()} />
    </SliderS>
  )
}

export default Slider;
