import React from 'react'
import { Container } from './styled';
import cry from '../../assets/images/cry.png';

const NotFound = () => (
  <Container>
    <img src={cry} alt="not found"/>
    <span>no movies found</span>
  </Container>
)

export default NotFound;