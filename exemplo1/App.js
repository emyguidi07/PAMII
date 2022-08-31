import React from 'react';
import { ScrollView, Text, View, Image, TextInput } from 'react-native';
import snorlax from '../exemplo1/assets/img/snorlax.png';

//não esquece de npm i pra aparecer node_modules no seu note
//para executar: npm i e npm start + w

const Pokemon = () => {
  return (
      <ScrollView>
          <View>
            <Text 
            style={{
              fontSize: 45,
              alignSelft: "center",
              color: "green"
            }}>
              Snorlax Berrie
            </Text>
            <Image
              source={{
                uri: snorlax
              }}
              style={{width: 200, 
              height: 210,
              alignSelft: "center"
              }}>
            </Image>
          </View>
          <TextInput
          style = {{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 5,
            margin: 15
          }}
          defaultValue = "Digite aqui:"
          />
      </ScrollView>
  )
}
export default Pokemon;
