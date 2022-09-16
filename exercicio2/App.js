import * as React from 'react';
import {Text, View, Image, TextInput, Button} from 'react-native';
import img from '../exercicio2/assets/img/react.jpg';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #808080;
    align-items: center;
    justify-content: center;
`;
const Title = styled.Text`
    color: #20b2aa;
    font-size: 30px;
    text-align: center;
    margin: 15px;
`;
const Paragrafo = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin: 15px;
`;

const Input =  styled.TextInput`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin: 15px;
  border: 2px solid #20b2aa;

`;


const Img = styled.Image`
    width: 500;
    height: 400;
    alignSelft: center;
`;

function dev(){
  alert("Feliz dia dev!");
}
export default function App() {
  return(
    <Container>
      <Title>Bem-vindo ao Front-end!</Title>
      <Img source = {{uri: img}}></Img>
      <Input placeholder="Digite seu nome dev!"/>
      <Paragrafo>Feliz dia do desenvolvedor - 14/09</Paragrafo>
      <Button
        title="Clique aqui"
        onClick= {dev()}
      />
    </Container>
  );
}
