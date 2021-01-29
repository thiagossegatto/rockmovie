import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;

  > img{
    height: 40px;
    margin-right: 10px;
  }

  > span {
    font-size: 16px;
  }
`;
