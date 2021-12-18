import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native'

export const styles = EStyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * .15,
        position: 'absolute',
    },

    fristHeader: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logoContainer: {
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: '30%',
        height: '60%',
    },

    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icons: {
        marginRight: 15,
        color: '#fff',
        fontSize: '1.4rem',
    },

    profileImage: {
        width: '1.6rem',
        height: '1.6rem',
        marginRight: 15,
        borderRadius: 4,
        
    },

    secondHeader: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    buttons: {
        borderRadius: 50,
        // width: '5rem',
        // height: '3.5rem',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    buttonsText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    arrowDown: {
        fontSize: '1.3rem',
        color: '#fff',
    },

})