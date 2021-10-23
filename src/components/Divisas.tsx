import React, { useState } from 'react'
import { View, Text } from 'react-native';

const Divisas = () => {

    const [origen, setOrigen] = useState('')
    const [destino, setDestino] = useState('')

    const handleChangeOrigen = (texto: string) => {
        setOrigen(texto)
    }
    const handleChangeDestino = (texto: string) => {
        setDestino(texto)
    }

    return (
        <View>
            <Text>
                Hola, stoy funcionando
            </Text>
        </View>
    )
}

export default Divisas
