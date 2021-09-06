import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function NumberInput(props) {

    const [quant, setQuant] = useState(1);

    function increment() {
        if (quant < 99) {
            setQuant(quant + 1);
            props.onValueChanged(quant + 1);
        }
    }

    function decrement() {
        if (quant > 1) {
            setQuant(quant - 1);
            props.onValueChanged(quant - 1);
        }
    }

    return (
        <View>
            <Text style={styles.title}>QUANTIDADE</Text>
            <View style={styles.input}>
                <Text style={styles.number}>{quant}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={decrement}>
                        <Image source={require('../../assets/subtract.png')} style={{ marginHorizontal: 5, width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={increment}>
                        <Image source={require('../../assets/add.png')} style={{ marginHorizontal: 5, width: 25, height: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F4F4F4',
        borderRadius: 25,
        height: 40,
        padding: 10,
        marginTop: 5,
    },
    number: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10,
        width: 50,
    },
    title: {
        fontSize: 12,
        fontFamily: 'BebasNeue',
        color: '#2FDBBC',
        fontWeight: '400',
        marginLeft: 15
    }
});

export default NumberInput;
