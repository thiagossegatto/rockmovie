import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: abtialiased;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    border: none;
  }

  button {
    background: none;
  }

  h1, h2, h3, h4, h5, h5, strong{
    font-weight: 500;
    font-family: 'Roboto Slab', serif;
  }

  button{
    cursor: pointer;
  }

  #root{
    display: flex;
    flex-direction: column;
  }
`;
