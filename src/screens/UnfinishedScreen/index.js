import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const UnfinishedScreen = () => (
    <View style={styles.container}>

        <Text style={styles.emoji}>😢</Text>
        <Text style={styles.title}>Desculpa</Text>
        <Text style={styles.text}>Esta tela ainda não foi terminada</Text>

    </View>
)
