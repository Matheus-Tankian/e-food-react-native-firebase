import React, { useState } from 'react';
import { ImageBackground, Text, View, SafeAreaView } from 'react-native';
import TextButton from '../components/TextButtonsOnBoard';
import Title from '../components/Title';
import { Styles } from '../components/Styles';
import { auth } from '../util/firebase';


function OnBoarding({ navigation }) {

    const background = [require('../../assets/chicken-leg.png'), require('../../assets/shipped.png'), require('../../assets/hamburguer.png')];
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
            <ImageBackground source={background[pos]} resizeMode='center' style={{ flex: 1, backgroundColor: '#D35400'}}>
                <SafeAreaView style={Styles.safeview}>
                    <Title />
                    <View style={{ flex: 1 }} />
                    <Text style={[Styles.pageTitle, { color: '#FFF' }]}>{title1[pos]}</Text>
                    <Text style={[Styles.pageTitle, { color: '#FFF' }]}>{title2[pos]}</Text>
                    <Text style={[Styles.pageSubtitle, { marginBottom: 50 }]}>{subtitle[pos]}</Text>
                    <TextButton title={buttonTitle[pos]} onPress={nextPage} />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

export default OnBoarding;