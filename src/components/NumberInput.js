import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';

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
            <Text style={Styles.title}>QUANTIDADE</Text>
            <View style={Styles.input}>
                <Text style={Styles.number}>{quant}</Text>
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

export default NumberInput;
