import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, Animated } from 'react-native';

import { styles } from './styles'

import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

import Logo from '../../assets/img/NetflixLogo.png'

export const HomeHeader = ({ screenPosition }) => {
    
    return (
        <Animated.View style={[styles.container, {
            paddingTop: StatusBar.currentHeight,
            backgroundColor: screenPosition > 10 ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
            zIndex: 100
        }
        ]}>
            
            <View style={styles.fristHeader}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={Logo} />
                </View>

                <View style={styles.iconsContainer}>
                    <Ionicons style={styles.icons} name="share-outline" />
                    <Feather style={styles.icons} name="search" />
                    <Image style={styles.profileImage} source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTk5FhPk1N7zfCQBRSyvTFXryarnOAuMNfg&usqp=CAU'
                    }} />
                </View>
            </View>

            <View style={styles.secondHeader}>
                <TouchableOpacity style={styles.buttons}><Text style={styles.buttonsText}>Séries</Text></TouchableOpacity>

                <TouchableOpacity style={styles.buttons}><Text style={styles.buttonsText}>Filmes</Text></TouchableOpacity>

                <TouchableOpacity style={styles.buttons}>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <Text style={styles.buttonsText}>Categorias</Text>
                        <MaterialIcons style={styles.arrowDown} name='arrow-drop-down' />
                    </View>
                </TouchableOpacity>

            </View>
        </Animated.View>
    )
}