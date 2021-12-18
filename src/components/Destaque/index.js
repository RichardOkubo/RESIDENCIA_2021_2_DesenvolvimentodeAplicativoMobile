import React from 'react';
import {styles} from '../styles';
import { Image, ImageBackground, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();

export const Destaque = () =>{
    return(
        <>
        <ImageBackground style={styles.imgDestaque} source={require('../../assets/img/destaque1.jpg')}>
       
        <Text style={styles.TituloDestaque}>Gavião Arqueiro</Text>
        
            <LinearGradient style={styles.containerTop10} colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']}>
                <Image style={styles.top10Badge}  source={require('../../assets/img/top10.png')}/>
                <Text style={styles.top10Text}>Top 1 de hoje no Brasil.</Text>
            </LinearGradient>
        </ImageBackground>
        </>     
    );
} 