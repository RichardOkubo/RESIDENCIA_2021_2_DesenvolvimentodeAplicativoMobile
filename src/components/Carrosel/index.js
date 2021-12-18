import React from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Title } from 'react-native-paper';
import { styles } from './styles';

EStyleSheet.build();

export const Carrosel = () =>{
    return(
        <View style={styles.container}>
            <Title style={styles.secaoTitle}>Nome da seção</Title>
            <FlatList
            keyExtractor={(item) =>item} 
            style={styles.lista}
            horizontal
            data={[1,2,3,4,5]}
            renderItem={({item,index})=>(
                <TouchableOpacity key={index}>
                    <ImageBackground style={styles.capa}  source={require('../../assets/img/destaque.jpg')}></ImageBackground>
                </TouchableOpacity>
            )}/>
        </View>
        
    );
}

