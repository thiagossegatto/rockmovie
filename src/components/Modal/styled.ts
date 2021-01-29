import styled from "styled-components";

export const ModalS = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  align-items: center;
  justify-content: center;
  :before {
    content: " ";
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  }
`;

export const Body = styled.div`
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

`;

export const Close = styled.a`
  display: flex;
  position: absolute;
  width: 40px;
  height: 40px;
  top: -20px;
  right: -20px;
  z-index: 6;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  :after {
    content: "\\00d7";
    color: #333;
    font-size: 20px;
  }
`;
