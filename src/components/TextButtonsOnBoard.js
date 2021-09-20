import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Styles } from './Styles';

function TextButton(props) {

    return (
        <View style={props.style}>
            <TouchableHighlight style={Styles.buttonBoard} onPress={() => { if (props.onPress) props.onPress(); }}>
                <Text style={Styles.textButtonBoard}>{props.title}</Text>
            </TouchableHighlight>
        </View>
    );
}

export default TextButton;