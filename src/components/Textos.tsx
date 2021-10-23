import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    text: string;
    type: 'title' | 'comment' | 'normal'
}

const Textos = ({ text, type }: Props) => {
    return (
        
        <Text 
            style={[
                styles.text,
                type === 'title' ? styles.title : null,
                type === 'comment' ? styles.comment : null,
                type === 'normal' ? styles.normal : null
            ]}
        >
            {text}
        </Text>
        
    )
}

export default Textos

const styles = StyleSheet.create({
    text: {
        
    },
    title: {
        fontSize: 40,
        position: 'absolute',
        top: 35,
        left: 20,
        color: 'darkslategrey'
    },
    comment: {
        fontSize: 20
    },
    normal: {
        color: 'black',
        padding: 10
    }
})
