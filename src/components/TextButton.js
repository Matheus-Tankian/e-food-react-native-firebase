import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, SafeAreaView, TouchableHighlight } from 'react-native';

function TextButton(props) {

    return (
        <View style={props.style}>
            <TouchableHighlight style={styles.button} onPress={() => { props.onPress() }}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2FDBBC',
        borderRadius: 25,
        justifyContent: 'center',
        height: 40,
        width: '100%'
    },
    text: {
        fontSize: 21,
        fontFamily: 'BebasNeue',
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
    }
});


export default TextButton;