import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, SafeAreaView, TouchableHighlight } from 'react-native';

class TextButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight style={styles.button} onPress={() => { this.props.onPress() }}>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableHighlight>
        );
    }

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