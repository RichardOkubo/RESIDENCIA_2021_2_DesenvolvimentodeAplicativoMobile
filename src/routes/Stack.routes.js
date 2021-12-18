import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login/Index';
import { CadastrarCliente } from '../screens/CadastrarCliente/Index'
import { MyTabs } from './Tabs.routes'
// import { Movie } from '../screens/Filme'

const Stack = createStackNavigator();

export const MyStack = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>

      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="Cadastrar"
        component={CadastrarCliente}
      />

      {/* <Stack.Screen
        name="movies"
        component={Movie}
      /> */}

      <Stack.Screen
        name="tabs"
        component={MyTabs}
      />


    </Stack.Navigator>
  )
};
