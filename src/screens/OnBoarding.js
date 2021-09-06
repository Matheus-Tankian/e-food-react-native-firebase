import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import TextButton from '../components/TextButton';
import Title from '../components/Title';

function OnBoarding({ props, navigation }) {

    const background = [require('../../assets/onboarding1.png'), require('../../assets/onboarding2.png'), require('../../assets/onboarding3.png')];
    const title1 = ['AWESOME', 'DELIVERED AT', 'GRAB THE'];
    const title2 = ['LOCAL FOOD', 'YOUR DOORSTEP', 'BEST DEALS AROUND'];
    const subtitle = ['Discover delicious food from the amazing restaurants near you', 'Fresh and delicious local food delivered from the restaurants to your doorstep', 'Grab the best deals and discounts around and save on your every order'];
    const buttonTitle = ['NEXT', 'NEXT', 'GET STARTED'];

    const [pos, setPos] = useState(0);

    function nextPage() {
        if (pos < background.length - 1) {
            setPos(pos + 1);
        } else {
            navigation.navigate('LogIn');
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={background[pos]} resizeMode='cover' style={{ flex: 1 }}>
                <SafeAreaView style={styles.safeview}>
                    <Title />
                    <View style={{ flex: 1 }} />
                    <Text style={styles.title}>{title1[pos]}</Text>
                    <Text style={styles.title}>{title2[pos]}</Text>
                    <Text style={styles.subtitle}>{subtitle[pos]}</Text>
                    <TextButton title={buttonTitle[pos]} onPress={nextPage} />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
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
        color: '#FFF',
    },
    subtitle: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '400',
        color: '#FFF',
        marginBottom: 50
    }
});


export default OnBoarding;