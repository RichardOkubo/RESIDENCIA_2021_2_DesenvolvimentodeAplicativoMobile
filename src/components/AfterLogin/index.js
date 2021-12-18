import React from 'react';

import { SafeAreaView, StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const net = require('../../../assets/netflix-logo-full.png');


const AfterLogin = () => {
    const robot = require('../../../assets/robot.jpg');

    let [items, setItems] = React.useState([
        {
            id: 1, nome: 'Mari', src: require('../../../assets/robot.jpg')
        },
        {
            id: 2, nome: 'Roberta', src: require('../../../assets/robot.jpg')
        },
        {
            id: 3, nome: 'Vinicin', src: require('../../../assets/purple-penguin.jpg')
        },
        {
            id: 4, nome: 'Bento', src: require('../../../assets/mask.jpg')
        },
        {
            nome: 'Adicionar perfil', src: require('../../../assets/posi.png')
        },
    ]);
    const numeroColumns = 2;

    function createRows(data, numRow) {
        const resto = Math.floor(items.length % numRow);
        if (resto == 1) {
            items.push({
                id: null,
                nome: null,
                url: null
            });
        }
        return data;
    }

    function navigator() {
        navigator = useNavigation()
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centralizar}>

                <Image source={net} style={styles.imageNetflix} />

            </View>

            <View style={{ justifyContent: 'center', flex: 5 }}>
                <Text style={styles.texto}>Quem está assistindo?</Text>
                <FlatList
                    style={styles.flatPadding}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', paddingTop: 20 }}
                    data={createRows(items, numeroColumns)}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', margin: 10, padding: 0 }}>

                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={styles.imageThumbnail} source={item.src} />
                            </TouchableOpacity>
                            <Text style={styles.texto}>{item.nome}</Text>
                        </View>
                    )}
                    numColumns={numeroColumns}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </SafeAreaView >
    );
};
export default AfterLogin;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        justifyContent: 'center',
        flex: 1
    },
    flatPadding: {
        paddingHorizontal: 20,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexWrap: 'wrap',
        height: 100,
        width: 100,
        resizeMode: 'stretch',
        borderRadius: 3
    },
    texto: {
        color: '#fff',
        fontSize: 20,
        backgroundColor: '#000',
        justifyContent: 'center',
        textAlign: 'center'
    },
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageNetflix: {
        // flexWrap: 'wrap',
        top: 30,
        height: 25,
        width: 100,
        marginBottom: 50,
        //resizeMode: 'stretch',
    }
}); 