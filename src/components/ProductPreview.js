import React, { useContext } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { AppContext } from './AppContext';
import { Styles } from './Styles';

function ProductPreview(props) {

    const { basket, setBasket } = useContext(AppContext);

    function addToBasket() {
        setBasket(basket.concat(props.product));

        if (props.onAdd) props.onAdd('Produto adicionado na cesta.');
    }

    return (
        <View style={Styles.card}>
            <View style={{ width: 170, height: 170 }}>
                <Image style={{ width: 170, height: 170, borderRadius: 10 }} resizeMode='cover' source={{ uri: props.product.img }} />
                <TouchableOpacity style={{ position: 'absolute', right: 10, bottom: 10, padding: 2, borderRadius: 5, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <Image source={require('../../assets/favorite.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
            </View>
            <Text style={Styles.title}>{props.product.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={Styles.price}>{props.product.priceLabel}</Text>
                <TouchableOpacity onPress={() => addToBasket()}>
                    <Image source={require('../../assets/basket.png')} style={{ margin: 10, width: 25, height: 25 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ProductPreview;
