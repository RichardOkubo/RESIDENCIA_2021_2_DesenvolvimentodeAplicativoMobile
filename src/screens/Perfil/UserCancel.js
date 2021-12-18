import { getActionFromState } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import users from '../../data/users';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default props => {

    /*function getActions(user){
        return(
            <>
                <Button
                    onPress={() => confirmUserDelection(user)}
                />
            </>
        )
    }
    */
    /*const confirmUserDelection = async (idConta) => {
        console.log(idConta);
    };*/



    const confirmUserDelection = async (idConta) => {
        Alert.alert('Não vá!', 'Deseja mesmo cancelar sua assinatura?', [
            {
                text: 'Sim',
                onPress(){
                    async function deleteUser() {
        
                        let userId = await AsyncStorage.getItem('userId')
                        axios.delete(`https://ecommerce-residencia.herokuapp.com/cliente/${userId}`)
                    }
                    deleteUser()
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
          
                <ListItem 
                    key={user.id}
                    onPress={() => props.navigation.navigate('UserPerfil')}
                    
                    >
                        
                    <Avatar source={{ uri: user.avatarUrl }} />
                    <ListItem.Content>                     
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Icon name={user.icon} size={30} onPress={() => confirmUserDelection(user.id)}/> 
                </ListItem>
                
                
                )
    }

                return (
                <View >
                    <FlatList
                        keyExtractor={user => user.id.toString()}
                        data={users}
                        renderItem={getUserItem}
                    />
                </View>
                )
}


