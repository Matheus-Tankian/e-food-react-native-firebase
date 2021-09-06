import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ProductPreview(props) {


    return (
        <View style={styles.card}>
            <View style={{ width: 170, height: 170 }}>
                <Image style={{ width: 170, height: 170, borderRadius: 10 }} resizeMode='cover' source={{ uri: props.product.img }} />
                <TouchableOpacity style={{ position: 'absolute', right: 10, bottom: 10, padding: 2, borderRadius: 5, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <Image source={require('../../assets/favorite.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{props.product.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.price}>{props.product.priceLabel}</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/basket.png')} style={{ margin: 10, width: 25, height: 25 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 170,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10,
        marginLeft: 10,
    },
    price: {
        fontFamily: 'BebasNeue',
        fontSize: 18,
        color: '#2FDBBC',
        fontWeight: '400',
        margin: 10
    },
    description: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10,
    },
});


export default ProductPreview;
