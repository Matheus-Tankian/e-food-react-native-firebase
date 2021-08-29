import React from 'react';
import { ImageBackground, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import TextButton from '../components/TextButton';
import Title from '../components/Title';

class OnBoarding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            background: [require('../../assets/onboarding1.png'), require('../../assets/onboarding2.png'), require('../../assets/onboarding3.png')],
            title1: ['AWESOME', 'DELIVERED AT', 'GRAB THE'],
            title2: ['LOCAL FOOD', 'YOUR DOORSTEP', 'BEST DEALS AROUND'],
            subtitle: ['Discover delicious food from the amazing restaurants near you', 'Fresh and delicious local food delivered from the restaurants to your doorstep', 'Grab the best deals and discounts around and save on your every order'],
            buttonTitle: ['NEXT', 'NEXT', 'GET STARTED'],
            pos: 0,
        };
    }

    nextPage = () => {

        if (this.state.pos < this.state.background.length - 1) {
            this.setState({ pos: this.state.pos + 1 });
        } else {
            console.log("TODO: Navegar");
        }
    }

    render() {

        const { pos, background, title1, title2, subtitle, buttonTitle } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={background[pos]} resizeMode='cover' style={{ flex: 1 }}>
                    <SafeAreaView style={styles.safeview}>
                        <Title />
                        <View style={{ flex: 1 }} />
                        <Text style={styles.title}>{title1[pos]}</Text>
                        <Text style={styles.title}>{title2[pos]}</Text>
                        <Text style={styles.subtitle}>{subtitle[pos]}</Text>
                        <TextButton title={buttonTitle[pos]} onPress={this.nextPage} />
                    </SafeAreaView>
                </ImageBackground>
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