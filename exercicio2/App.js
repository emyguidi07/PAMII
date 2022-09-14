import { StatusBar } from 'expo-status-bar';
import react from 'react';
import {  Text, View, TextInput, Button, Image} from 'react-native';
import img from '../exercicio2/assets/img/react.jpg';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`; 

const Title = styled.Text`
color: "blue";
text-align: center;
font-size: 30px;
`;

const Form = styled.TextInput`
    height: 40;
    borderColor: "gray";
    borderWidth: 1;
    padding: 5;
    margin: 15;
`;

const Botao = styled.Button`
height: 40;
background-Color: "blue";
borderWidth: 1;
color: #fff;
font-size: 1em;
padding: 0.25em 1em;
margin: 15;
`;

const Img = styled.Image`
style={{width: 200;
height: 210;
alignSelft: "center";
`;
export default () => (
    <Container>
      <Title>Login</Title>
      <Form>Digite seu email!</Form>
      <Form>Digite sua senha!</Form>
      <Botao>Entrar</Botao>
      <Img source = {{uri: img}}></Img>
    </Container>
  );

