import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Foundation, Feather, FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {colors} from '../Styles/colors';

import { Home } from '../screens/Home/Home'
import { UnfinishedScreen } from '../screens/UnfinishedScreen'
import Perfil from '../screens/Perfil/UserPerfil'
import DeletarPerfil from '../screens/Perfil/UserCancel'
import ComingSoon from '../screens/ComingSoon'

const Tab = createBottomTabNavigator();

export function MyTabs() {


  function setIcons(route, color, size) {
    
    if (route.name === 'Início') {
      return <Foundation name="home" size={size - 2} color={color} />;

    } else if (route.name === 'Perfil') {
      return <Feather name="user" size={size - 2} color={color} />

    }else if (route.name === 'Novidades') {
      return <MaterialCommunityIcons name="cards" size={size - 2} color={color} />

    }else if (route.name === 'Risadas rápidas') {
      return <FontAwesome5 name="smile-beam" size={size - 2} color={color} />

    }else if (route.name === 'Deletar Perfil') {
      return <AntDesign name="delete" size={size - 2} color={color} />
    }
  }

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => setIcons(route, color, size),
      tabBarStyle: {backgroundColor: colors.background},
      tabBarActiveTintColor: '#fff',
    })}>

      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Novidades" component={ComingSoon} />
      <Tab.Screen name="Risadas rápidas" component={UnfinishedScreen} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Deletar Perfil" component={DeletarPerfil} />

    </Tab.Navigator>
  );
}