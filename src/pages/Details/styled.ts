import styled from "styled-components";

export const Container = styled.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 1200px;
  min-height: 400px;
  margin-top: 60px;
  color: #333;
  position: relative;
  z-index: 1;
  @media (max-width: 1200px) {
    width: 100%;
  }

  h2 {
    border-top: 2px solid #fe87a9;
    width: 110px;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 350px;
  background: linear-gradient(#e97359, #fe87a9);
  border-radius: 15px;
  @media (min-width: 700px) and (max-width: 900px) {
    height: 450px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  width: 100%;
  padding: 40px;
  grid-template-columns: 30% 60% 10%;
  grid-template-rows: 60% 40%;
  grid-template-areas:
    "box1 box2 box3"
    "box1 box4 box4";

  @media (max-width: 900px) {
    grid-template-areas:
      "box1 box2"
      "box1 box3"
      "box4 box4";
    grid-template-columns: 40% 60%;
    grid-template-rows: auto auto auto;
  }
  @media (max-width: 500px) {
    grid-template-areas:
      "box1"
      "box2"
      "box3"
      "box4";
    grid-template-columns: 100%;
  }
`;

export const Cover = styled.div`
  display: flex;
  grid-area: box1;
  > img {
    width: 100%;
    border-radius: 15px;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: box2;
  padding: 0 40px;
  color: #fff;
  @media (max-width: 500px) {
    color: #333;
    padding: 0 15px;
    margin-top: 30px;
  }

  > h1 {
    font-size: 36px;
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    grid-area: box3;
    margin-top: 20px;
    > li {
      display: flex;
      color: #e5e5e5;
      @media (max-width: 500px) {
        color: #666;
      }
      > span {
        margin-right: 15px;
        color: #fff;
        @media (max-width: 500px) {
          color: #333;
        }
      }
    }
  }
`;

export const InfosRate = styled.div`
  color: #fff;
  font-size: 25px;
  @media (max-width: 900px) {
    padding: 0 40px;
  }
  @media (max-width: 500px) {
    display: flex;
    color: #333;
    padding: 0 15px;
    justify-content: flex-end;
  }
  > span {
    display: flex;
    align-items: flex-end;
    > b {
      position: relative;
      font-size: 40px;
      top: 4px;
      right: 3px;
    }
  }
`;

export const Description = styled.div`
  grid-area: box4;
  display: flex;
  align-self: flex-end;
  width: 100%;
  padding: 0 40px;
  color: #333;
  flex-direction: column;

  @media (max-width: 900px) {
    margin-top: 50px;
    padding: 0;
  }

  > p {
    margin-top: 15px;
  }
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 40px;

  > h2 {
    margin-bottom: 15px;
  }
`;

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
  > li {
    display: flex;
    width: 10%;
    @media (max-width: 900px) {
      width: 20%;
    }
    @media (max-width: 600px) {
      width: 33%;
    }
    > img {
      width: 100%;
      cursor: pointer;
    }
  }
`;
