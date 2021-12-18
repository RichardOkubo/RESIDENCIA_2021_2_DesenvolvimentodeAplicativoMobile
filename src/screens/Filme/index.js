// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { colors } from '../../Styles/colors';
// import { View, Text, Image, StyleSheet, ScrollView, Linking, Share, Alert } from 'react-native';
// import { useParams } from "react-router-dom";
// import api from '../../services/MovieApi';
// import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
// import { useFonts } from 'expo-font';
// // import SyncStorage from 'sync-storage';


// import {
//   Container,
//   DivClip,
//   DivBottom,
//   DivInfo,
//   LogoNetflix,
//   TituloFilme,
//   Releasedate,
//   ParentalRating,
//   ParentalRatingImg,
//   WatchButton,
//   TextWatch,
//   IconPlay,
//   DownloadButton,
//   DownloadText,
//   Description,
//   AddButton,
//   LikeButton,
//   ButtonsMenu,
//   ShareButton,
//   DownButton

// } from './style'



// export const Movie = () => {

//   // const [loaded] = useFonts({
//   //   CabinVariable: require('../../assets/fonts/Cabin-VariableFont_wdth,wght.ttf'),
//   // });


//   const [produto, setProduto] = useState();
//   const [colorLike, setColorLike] = useState('#e5e5e5');

//   var params = useParams();
//   //var idFilme = params.idFilme;
//   var idFilme = '9297';
//   var likeColor = 'white';



//   const API_KEY = '345411636508e2b74308228fcfc87973'

//   //requisição da API
//   useEffect(() => {
//     api
//       .get(`/movie/${idFilme}?api_key=${API_KEY}&language=pt-BR`)
//       .then((response) => setProduto(response.data))
//       .catch((err) => {
//         console.error("Base de dados não encontrada: " + err);
//       });
//   }, [params.type, params.idFilme]);


//   //variavel para obter o Filme direto no site que produziu para os botões 'Baixar'
//   const [urlDown, setUrlDown] = useState();

//   //requisição para determinar se o filme tem um site para download ou não
//   useEffect(() => {
//     api
//       .get(`/movie/${idFilme}?api_key=${API_KEY}&language=pt-BR`)
//       .then((response) => setUrlDown(response.data.homepage))

//   }, [params.type, params.idFilme]);



//   function handleAddInCart() {
//     const title = {
//       title: produto.title
//     }

//     if (params.type === "tv") {
//       title.title = produto.title
//     }
//   }



//   //Link para pesquisa direto na Netflix para os botões 'Assistir'
//   var strg = String(produto?.title)
//   var strgReplace = "https://www.netflix.com/search?q=" + strg.replace(/ /g, "%20");


//   //Pegando só o ano de lançamento ao inves da data completa
//   var dataRelease = String(produto?.release_date);
//   var dataReplace = dataRelease.split('-')[0];



//   //definindo a cor branca(#ffffff) para o botão 'Classifique'
//   const [estado, setEstado] = useState("#ffffff");
//   const [like, setLike] = useState(false)

//   //muda de cor o botão 'Classifique' entre vermelho e branco
//   const switchColor = () => {
//     const dados = ({
//       idFilme,
//       like,
//     })
//     SyncStorage.set(JSON.stringify(dados))

//     if (estado == "#ffffff" && like == false) {
//       setEstado("#ff0000");
//       setLike(true);
//     } else if (estado == "#ff0000" && like == true) {
//       setEstado("#ffffff");
//       setLike(false);
//     }
//   };

//   const compartilharFilme = () => {
//     try {
//       const result = Share.share({
//         message: 'Assista comigo : ' + produto?.title +
//           " em " + Linking.openURL(strgReplace)
//       });

//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const popUpAdd = () => {

//     SyncStorage.set(JSON.stringify(produto.title))

//     Alert.alert('Concluído', + produto?.title + ' adicionado' +
//       'com sucesso a minha lista', [
//       { text: 'Continuar' }
//     ])
//   }


//   return (

//     <View>
//       {handleAddInCart}
//       <DivClip>
//         <Image
//           style={styles.topClip}
//           source={{
//             uri: "https://www.themoviedb.org/t/p/original/" + produto?.poster_path
//           }} />
//       </DivClip>


//       <DivInfo>

//         <LogoNetflix source={require('../../assets/img/NetflixLogo.png')} />
//         <TituloFilme style={{ fontFamily: 'CabinVariable', fontSize: 20 }}>
//           {produto?.title}
//         </TituloFilme>

//         <Releasedate>
//           {dataReplace}
//           <ParentalRating>
//             <ParentalRatingImg source={require('../../assets/img/ParentalRatingImg.png')} />
//           </ParentalRating>

//         </Releasedate>

//         <WatchButton
//           onPress={() => Linking.openURL(strgReplace)}
//         >

//           <AntDesign style={styles.watchIcon} name="caretright" size={24} color="black" />
//           <TextWatch style={{ fontFamily: 'CabinVariable', fontSize: 16 }}>
//             Assistir
//           </TextWatch>
//         </WatchButton>

//         <DownloadButton
//           onPress={() => Linking.openURL(urlDown)}
//         >

//           <MaterialCommunityIcons style={styles.downIcon} name="download" size={24} color="white" />
//           <DownloadText
//             onPress={() =>

//               Linking.openURL(urlDown)}
//             style={{ fontFamily: 'CabinVariable', fontSize: 16 }}>
//             Baixar
//           </DownloadText>

//         </DownloadButton>

//         <Description>
//           {produto?.overview}
//         </Description>

//         <ButtonsMenu>
//           <AddButton
//             onPress={() => popUpAdd()}
//           >
//             <AntDesign style={styles.plusIcon} name="plus" size={35} color="white" />
//             <Text style={{ color: 'white' }}>
//               Minha lista
//             </Text>
//           </AddButton>

//           <LikeButton>
//             <AntDesign
//               onPress={() => switchColor()}
//               name="like1" size={35}
//               color={estado}
//             />
//             <Text style={{ color: 'white' }}>
//               Classifique
//             </Text>
//           </LikeButton>
//           <ShareButton>
//             <Entypo name="share" size={35} color="white" />
//             <Text style={{ color: 'white' }}>
//               Compartilhar
//             </Text>
//           </ShareButton>
//           <DownButton
//             onPress={() => Linking.openURL(urlDown)}
//           >
//             <MaterialCommunityIcons name="download-multiple" size={35} color="white" />
//             <Text style={{ color: 'white' }}>
//               Baixar
//             </Text>
//           </DownButton>
//         </ButtonsMenu>

//       </DivInfo>

//     </View>

//   )
// }



// const styles = StyleSheet.create({
//   topClip: {
//     width: '20rem',
//     height: '11.66rem',
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   watchIcon: {
//     position: 'absolute',
//     // transform: 'translateX(-2.2rem)',
//   },
//   downIcon: {
//     position: 'absolute',
//     // transform: 'translateX(-2.2rem)',
//   }

// })