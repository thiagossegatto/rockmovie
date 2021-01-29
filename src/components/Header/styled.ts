import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";

const moveBg = (): number => {
  const moves = [0, 90, 180, 268];
  const rand = Math.floor(Math.random() * 4);
  return moves[rand];
};

interface IBackground {
  withSearch: boolean;
}

export const Background = styled.header<IBackground>`
  display: flex;
  width: 100%;
  height: ${(props) => (props.withSearch ? "350px" : "160px")};
  background: #000;
  position: relative;
  justify-content: center;
  :before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: ${(props) => (props.withSearch ? "350px" : "160px")};
    z-index: 1;
    opacity: 0.2;
    background-image: url(${bg});
    background-position: 0 ${moveBg()}px;
    background-size: 600px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 1200px;
  z-index: 2;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const LogoAndSign = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 600px) {
    justify-content: center;
  }

  > a {
    display: flex;
    margin-top: 40px;
    > img {
      width: 300px;
    }
  }
`;

export const Sign = styled.div`
  display: flex;
  margin-top: 40px;

  button {
    width: 100px;
    height: 45px;
    margin-left: 10px;
  }

  button:first-child {
    color: #fff;
  }

  button:not(:first-child) {
    border: 1px solid #ff9000;
    color: #ff9000;
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Slogan = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  b {
    display: flex;
    font-size: 30px;
    justify-content: center;
  }
  span {
    display: flex;
    font-size: 20px;
    justify-content: center;
  }
`;
