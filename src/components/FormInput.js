import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

function FormInput(props) {

    const [password, setPassword] = useState(props.password);

    return (
        <View style={props.style}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.input}>
                <TextInput onChangeText={props.onChangeText} style={{ width: '90%' }} autoCapitalize='none' placeholder={props.holder} secureTextEntry={password} />
                {props.password &&
                    <TouchableOpacity onPressIn={() => setPassword(false)} onPressOut={() => setPassword(true)}>
                        <Image source={require('../../assets/eye.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        borderRadius: 25,
        height: 40,
        width: '100%',
        padding: 10,
        marginTop: 5,
    },
    title: {
        fontSize: 12,
        fontFamily: 'BebasNeue',
        color: '#2FDBBC',
        fontWeight: '400',
        marginLeft: 15
    }
});


export default FormInput;