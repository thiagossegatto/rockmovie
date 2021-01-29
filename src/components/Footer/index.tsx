import React from "react";
import { Background, Container } from "./styled";
import logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <Background>
      <Container>
        <img src={logo} alt="logo - RockMovie" />
      </Container>
    </Background>
  )
}

export default Footer;
