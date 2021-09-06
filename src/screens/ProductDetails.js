import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import NumberInput from '../components/NumberInput';
import TextButton from '../components/TextButton';

function ProductDetails({ route }) {

    const { product } = route.params;

    var qnt = 1;

    function addBasket() {
        console.log("addBasket");
        console.log(qnt * 15);
        //TODO 
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Image style={{ flex: 1 }} resizeMode='cover' source={{ uri: product.img }} />
            <SafeAreaView style={styles.safeview} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Image source={require('../../assets/clock.png')} style={{ width: 30, height: 30 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.subtitle}>{product.subtitle}</Text>
                    <Text style={styles.subtitle}>{`${product.time} min`}</Text>
                </View>
                <Text style={[styles.title, { fontSize: 12, marginTop: 25 }]}>DESCRIPTION</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <NumberInput onValueChanged={(value) => qnt = value} />
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Text style={[styles.title, { fontSize: 12 }]}>SUB TOTAL</Text>
                        <Text style={[styles.title, { fontSize: 24, color: '#2FDBBC' }]}>{product.priceLabel}</Text>
                    </View>
                </View>
                <TextButton style={{ marginTop: 25 }} title='ADD TO BASKET' onPress={addBasket} />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    safeview: {
        flex: 1,
        margin: 20,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'BebasNeue',
        fontSize: 36,
        fontWeight: '400',
    },
    subtitle: {
        fontFamily: 'Poppins',
        fontSize: 15,
        textAlign: 'right',
        fontWeight: '400',
        color: '#F99928',
    },
    description: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10,
        color: '#A3A3A3',
    },
});


export default ProductDetails;
