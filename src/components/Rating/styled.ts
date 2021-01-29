import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: #333;
  width: 20%;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 800px) {
    width: 40%;
  }
  @media (max-width: 650px) {
    width: 100%;
    justify-content: center;
  }

  > span {
    width: 70px;
  }
  button {
    margin-left: 4px;
  }
`;
