import styled from "styled-components";

export const SliderS = styled.div`
  width: 700px;
  height: 393px;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 600px;
    height: 337px;
  }

  @media (max-width: 700px) {
    width: 500px;
    height: 281px;
  }

  @media (max-width: 550px) {
    width: 300px;
    height: 168px;
  }

  button {
    position: absolute;
    color: #333;
    right: -20px;
    width: 60px;
    height: 60px;
    z-index: 1;

    > svg {
      width: 60px;
      height: 60px;
      fill: #f5f5f5;
    }
  }
  button:nth-child(1) {
    left: -20px;
    right: auto;
  }
  > ul {
    width: 100%;
    > li {
      width: 100%;
      display: flex;
      opacity: 0;
      transition-duration: 1s ease;
      img {
        width: 100%;
      }
    }
    > li.active {
      opacity: 1;
      transition-duration: 1s;
      transform: scale(1);
    }
  }
`;