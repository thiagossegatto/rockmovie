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

  > h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    width: 100%;
    padding: 15px;
  }

  > ul {
    display: grid;
    grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
    column-gap: 2%;

    @media (max-width: 900px) {
      grid-template-columns: 32% 32% 32%;
    }
    @media (max-width: 650px) {
      grid-template-columns: 48% 48%;
      column-gap: 4%;
    }
  }
`;

export const Card = styled.li`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 350px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1),
    0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  background-size: cover;

  @media (max-width: 450px) {
    min-height: 150px;
  }

  > a {
    width: 100%;
    display: flex;
    position: relative;

    img {
      width: 100%;
    }

    h3 {
      display: flex;
      width: 100%;
      color: #666;
      padding: 15px;
    }
    > span {
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 15px;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-family: "Roboto Slab", serif;
      font-size: 20px;
      display: none;
    }
    > div {
      display: none;
    }
    :hover {
      > div,
      span {
        display: flex;
      }
    }
  }
`;
