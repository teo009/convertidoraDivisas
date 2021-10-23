import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Textos from './Textos'

interface Props {
    color?: 'light' | 'dark';
    text: string;
    onPress: () => void
}

const ButtonCalculate = ({ color, text, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                color === 'light' ? styles.light : null,
                color === 'dark' ? styles.dark : null,
            ]}
        >
            <Textos text='Calcular'type='normal'></Textos>
        </TouchableOpacity>
    )
}

export default ButtonCalculate

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 40,
        right: 20,
        borderRadius: 50,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    light: {
        backgroundColor: 'lightslategrey'
    },
    dark: {
        backgroundColor: 'darkslategrey'
    }
})