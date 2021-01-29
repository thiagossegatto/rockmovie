import styled from "styled-components";

export const Background = styled.footer`
  display: flex;
  width: 100%;
  height: 200px;
  background: #000;
  margin-top: 40px;
  justify-content: center;
  justify-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 1200px;
  background: #000;

  @media (max-width: 600px) {
    justify-content: center;
  }

  > img {
    width: 150px;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
