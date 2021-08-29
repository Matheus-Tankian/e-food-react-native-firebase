import React from 'react';
import { ImageBackground, Text, View, StyleSheet, SafeAreaView, TouchableHighlight, Image } from 'react-native';
import FormInput from '../components/FormInput';
import TextButton from '../components/TextButton';
import Title from '../components/Title';

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image style={{ width: '100%', height: '30%' }} resizeMode='cover' source={{ uri: 'https://flockler.com/thumbs/sites/192/pan_fried_salmon_new_potatoes_broccoli_in_pesto_20703_s600x600_c854x499_l0x368.png' }} />

                <SafeAreaView style={styles.safeview}>
                    <View style={{ flex: 1 }} />
                    <FormInput title='E-MAIL' holder='seu@email.com' />
                    <FormInput style={{ marginTop: 25 }} title='PASSWORD' holder='Password' password={true} />
                    <TouchableHighlight>
                        <Text style={styles.forgotPass}>Forgot Password</Text>
                    </TouchableHighlight>
                    <TextButton title='LOGIN' onPress={() => console.log('teste')} />
                </SafeAreaView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    safeview: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 20,
        marginBottom: 50
    },
    title: {
        fontFamily: 'BebasNeue',
        fontSize: 36,
        fontWeight: '400',
    },
    forgotPass: {
        fontFamily: 'Poppins',
        fontSize: 15,
        textAlign: 'right',
        fontWeight: '400',
        color: '#A3A3A3',
        marginTop: 10,
        marginBottom: 50,

    }
});


export default Product;