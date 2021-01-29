import styled from 'styled-components';

export const Container = styled.div`
  align-self: flex-end;
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  background: #fff;
  bottom: -20px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  @media (max-width: 650px) {
    flex-direction: column;
    height: 120px;
    justify-content: space-around;
    padding: 15px;
    width: 100%;
    right: auto;
  }
  svg {
    fill: #b5b5b5;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  width: 80%;
  padding: 0 15px;
  margin-left: 20px;
  align-items: center;
  border-right: #b5b5b5 1px solid;

  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 60%;
  }
  @media (max-width: 650px) {
    width: 100%;
    margin: 0;
    border-right: none;
  }

  input {
    display: flex;
    width: 90%;
    height: 40px;
    border-bottom: #b5b5b5 1px solid;
    color: #333;
    margin-left: 15px;
    padding: 0 10px;

    @media (max-width: 1000px) {
      width: 80%;
    }
    @media (max-width: 650px) {
      width: 100%;
      margin-left: 0;
    }
  }
`;
