import React from 'react';
import img from '../exercicio2/assets/img/react.jpg';
import { Container, Title, Img, Botao, Form} from './styles';

export default function App() {
  return(
    <Container>
      <Title>Login</Title>
      <Form>Digite seu email!</Form>
      <Form>Digite sua senha!</Form>
      <Botao>Entrar</Botao>
      <Img source = {{uri: img}}></Img>
    </Container>
  );
}
