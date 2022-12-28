import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

function Login() {
  return (
    <Container>
      <Title>
        TESTE
        <small>Oi</small>
      </Title>
      <Paragrafo>Loren ipsum</Paragrafo>

      <button type="buttun">Send</button>
    </Container>
  );
}

export default Login;
