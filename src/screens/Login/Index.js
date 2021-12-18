import React from "react";
import { View, Text, Image, TouchableHighlight, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";


import serraApi from "../../services/serratecApi";

import Styles from "./Styles";

export const Login = () => {
  const navigation = useNavigation();

  const data = {
    name: '', cpf: ''
  }

  function handleChangeData(value, variable) {
    if (variable == "name") {
      data.name = value
    } else if (variable == "cpf") {
      data.cpf = value
    }
  }

  async function handleSubmit() {
    const users = await serraApi.get("/cliente")
    let userExist = false
    users.data.forEach(user => {
      if (user.usuario == data.name && user.cpf == data.cpf) {
        AsyncStorage.setItem('userId', JSON.stringify(user.id))
        navigation.navigate("tabs")
        userExist = true
        return
      }
    });
    if (!userExist) {
      alert("Usuário não encontrado")
    }
  }
  
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.containerTopo}>
          <Image
            style={Styles.image}
            source={require('../../assets/img/Login/logo.png')}
          />
          <Text style={Styles.privacid}>PRIVACIDADE</Text>
        </View>
        <Text style={Styles.descricaoF}>
          Filmes, séries e muito mais, sem limites
        </Text>
        <Text style={Styles.descricao}>
          Assista onde quiser. Cancele quando quiser.
        </Text>
        <View style={Styles.buscaBox}>
          <TextInput style={Styles.buscaInput} placeholder="Login" onChange={e => handleChangeData(e.nativeEvent.text, "name")} />

          <TextInput style={Styles.buscaInput} placeholder="CPF" onChange={e => handleChangeData(e.nativeEvent.text, "cpf")} />
          <TouchableHighlight
            style={Styles.buttonRed}
            onPress={() => handleSubmit()}
          >
            <Text style={Styles.buttonTextoRed}>Entrar</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={Styles.buttonRed}
            onPress={() => navigation.navigate("Cadastrar")}
          >
            <Text style={Styles.buttonTextoRed}>Cadastrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};