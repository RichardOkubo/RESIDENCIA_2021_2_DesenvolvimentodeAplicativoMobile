import EStyleSheet from "react-native-extended-stylesheet";

import { colors } from '../../Styles/colors';

export const styles = EStyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },

    emoji: {
        fontSize: '7rem',
        marginBottom: '10%'
    },

    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: colors.primaryColor,
        marginBottom: '4%'
    },

    text: {
        color: colors.textColor,
    },
})