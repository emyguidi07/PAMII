import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const Title = styled.Text`
    color: blue;
    font-size: 30px;
    text-align: center;
    margin: 15px;
`;
const Inst = styled.Text`
    color: #888;
    font-size: 20px;
    text-align: center;
    margin: 15px;
`;
const Img = styled.Image`
    width: 305;
    height: 240;
    alignSelft: center;
`;
const ImgThumb = styled.Image`
    width: 500;
    height: 500;
    alignSelft: center;
`;
const CheckButton = styled.TouchableOpacity`
    width: 300px;
    height: 50px;
    border-width: 1px;
    border-radius: 10px;
    alignSelft: center;
    justify-content: center;
    background-color: blue;
`;

const TextButton = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
`;

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

   let openImagePickerAsync = async () => {    
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setSelectedImage({ localUri: pickerResult.uri });
   };
  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      alert(`Vish! Esse compartilhamento está disponível apenas para Mobile!`);
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  };

  if (selectedImage !== null) {
    return (
      <Container>
        <ImgThumb source={{ uri: selectedImage.localUri }} />
        <CheckButton onPress={openShareDialogAsync} >
          <TextButton>Compartilhar</TextButton>
        </CheckButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Compartilhamento de imagens
      </Title>
      <Img source={{ uri: 'https://i.pinimg.com/736x/70/80/24/7080243d5288b330bda68e1ecb875e44.jpg' }} />
      <Inst>
        Compartilhe suas fotos quando quiser ao clicar no botão:
      </Inst>
      <CheckButton onPress={openImagePickerAsync}>
        <TextButton>Escolher uma foto</TextButton>
      </CheckButton>
    </Container>
  );
}

