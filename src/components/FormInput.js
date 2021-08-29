import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, SafeAreaView, TouchableHighlight, TextInput, Image } from 'react-native';

class FormInput extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.style}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.input}>
                    <TextInput style={{ width: '90%' }} placeholder={this.props.holder} secureTextEntry={this.props.password} />
                    {this.props.password &&
                        <Image source={require('../../assets/eye.png')} style={{ width: 30, height: 30 }} />}
                </View>


            </View>
        );
    }

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