import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000', 
    },

    menuHeader:{
        width: '100%',
        height: 38,
        marginTop:15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
       
    },
    textBtn:{
        color:'#fff',
        fontSize: 17,
        fontWeight:'bold',
    },

    menuBtn:{
        justifyContent:'center',
        alignItems:'center',
    },

    menuBtnP:{
        height:55,
        justifyContent:'center',
        alignItems:'center'
    },

    flatListContainer:{
        width: '100%',
        height: 100,
        marginTop: 10,
        marginBottom:50,
        
    },

    oval:{
        backgroundColor:'#E50914',
        padding: 2.5,
        width: 90,
        height: 90,
        borderRadius: 90,
    },
    capa:{
        height: 85,
        width: 85,
        borderRadius: 85,
    },
    previaContainer:{
        width: '100%',
        marginTop:10
    },
    previasText:{
        marginTop: 20,
        marginLeft: 20,
        fontSize:28,
        color:'#fff'
    },

    logo:{
        color: '#fff',
        fontSize: 19,
        alignItems:'center',
        marginLeft:13,
        position: 'absolute',
        backgroundColor:'rgba(0,0,0,0.6)',
        bottom: -3,
    },


});