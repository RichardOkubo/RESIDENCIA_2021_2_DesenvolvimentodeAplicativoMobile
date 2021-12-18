import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    imgDestaque:{
       height:400,
       width: '100%',
       justifyContent:'center',
       alignItems:'center',
       
    },
    TituloDestaque:{
        color: '#fff',
        fontSize:'3.2rem',
        marginTop: '29%',
        marginRight:'40%',
    },
    containerTop10:{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        padding: 30,
    },

    top10Badge:{
        marginRight:10,
    },
    top10Text:{
        color:'#fff',
        fontSize:'1.6rem'
    }, 
   
});