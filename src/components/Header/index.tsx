import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Background, LogoAndSign, Sign, Slogan } from "./styled";
import logo from "../../assets/images/logo.svg";
import Search from "../Search";

function Header() {

  const { id }: any = useParams();

  return (
    <Background withSearch={!id}>
      <Container>
        <LogoAndSign>
          <Link to="/">
            <img src={logo} alt="logo - RockMovie" />
          </Link>
          <Sign>
            <button>Login</button>
            <button>SignUp</button>
          </Sign>
        </LogoAndSign>
        {!id && (<>
          <Slogan>
            <b>Are you looking for a good movie?</b>
            <span>Find Here!</span>
          </Slogan>
          <Search />
        </>)
        }
      </Container>
    </Background>
  )
}

export default Header;
