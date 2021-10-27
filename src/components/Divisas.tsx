import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import ButtonCalculate from './ButtonCalculate';
import Textos from './Textos';
import Inputs from './Inputs'

const Divisas = () => {

    const [origen, setOrigen] = useState<string>('')
    const [destino, setDestino] = useState<string>('')
    const [convertir, setConvertir] = useState<number>(0)
    const [resultado, setResultado] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)

    const handleChangeOrigen = (texto: string) => {
        setOrigen(texto)
    }
    const handleChangeDestino = (texto: string) => {
        setDestino(texto)
    }
    const handleChangeConvertir = (texto: string) => {
        const number = parseFloat(texto)
        if (isNaN(number)) {
            setError(true)
        } else {
            setError(false)
        }
        setConvertir(number)
    }
    const handleCalcular = () => {
        if (origen === 'dolar' && destino === 'cordoba') {
            const result = convertir * 35
            setResultado(result)
        } else if (origen === 'dolar' && destino === 'euro') {
            const result = convertir * 0.80
            setResultado(result)
        } else if (origen === 'euro' && destino === 'cordoba') {
            const result = convertir * 40
            setResultado(result)
        } else if (origen === 'euro' && destino === 'dolar') {
            const result = convertir * 1.20
            setResultado(result)
        } else if (origen === 'cordoba' && destino === 'dolar') {
            const result = convertir * 0.020
            setResultado(result)
        } else if (origen === 'cordoba' && destino === 'euro') {
            const result = convertir * 0.025
            setResultado(result)
        } else {
            alert(
                'Error, asegurese de usar argumentos válidos, en los campos Origen y destino'
            )
        }
    }

    return (
        <View style={styles.container}>

            <Textos text='Origen' type='normal'/>
            <Inputs 
                defaultValue={origen}
                errorMessage='Solo se admite clave de la moneda'
                onChangeText={setOrigen}
            />

            <Textos text='Destino' type='normal'/>
            <Inputs 
                defaultValue={destino}
                errorMessage='Solo se admite clave de la moneda'
                onChangeText={setDestino}
            />

            <Textos text='Cantidad' type='normal'/>
            <Inputs 
                defaultValue={convertir.toString()}
                errorMessage='solo se admiten numeros'
                onChangeText={handleChangeConvertir}
                handleError={error}
            />

            <ButtonCalculate
                color='light'
                text='Convertir'
                onPress={handleCalcular}
                disabled={error}
            />

            <Textos text='Resultado:' type='normal'/>
            <Text style={styles.result}>
                {resultado.toString()}
            </Text>

            <Textos  text='Divisas' type='title'/>
            <Textos 
                type='comment'
                text='Recuerda usar las claves (dolar, cordoba y euro) en las 
                opciones (origen y destino) para realizar  las conversiones'
            />

        </View>
    )
}

export default Divisas

const styles = StyleSheet.create({
    result: {
        fontSize: 40,
        color: 'lightslategrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
