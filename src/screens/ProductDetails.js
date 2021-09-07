import React, { useContext, useState } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { AppContext } from '../components/AppContext';
import NumberInput from '../components/NumberInput';
import TextButton from '../components/TextButton';
import { Styles } from '../components/Styles';

function ProductDetails({ route }) {

    const { product } = route.params;

    const { basket, setBasket } = useContext(AppContext);

    const [qnt, setQnt] = useState(1);
    const [msg, setMsg] = useState('');

    function addBasket() {
        let bsk = [];
        for (let index = 0; index < qnt; index++) {
            bsk.push(product);
        }
        setBasket(basket.concat(bsk));
        setMsg('Produto adicionado na cesta.');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Image style={{ flex: 1 }} resizeMode='cover' source={{ uri: product.img }} />
            <SafeAreaView style={Styles.safeview} >
                <Text style={{ textAlign: 'center', marginVertical: 10, color: '#F99928' }}>{msg}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Text style={Styles.pageTitle}>{product.name}</Text>
                    <Image source={require('../../assets/clock.png')} style={{ width: 30, height: 30 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[Styles.pageSubtitle, { textAlign: 'right', color: '#F99928' }]}>{product.subtitle}</Text>
                    <Text style={[Styles.pageSubtitle, { textAlign: 'right', color: '#F99928' }]}>{`${product.time} min`}</Text>
                </View>
                <Text style={[Styles.pageTitle, { fontSize: 15, marginTop: 25 }]}>DESCRIÇÃO</Text>
                <Text style={[Styles.description, { color: '#A3A3A3' }]}>{product.description}</Text>
                <View style={{ marginTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <NumberInput onValueChanged={(value) => setQnt(value)} />
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Text style={[Styles.pageTitle, { fontSize: 15 }]}>SUB TOTAL</Text>
                        <Text style={[Styles.pageTitle, { fontSize: 24, color: '#2FDBBC' }]}>{`R$ ${qnt * product.price},00`}</Text>
                    </View>
                </View>
                <TextButton style={{ marginTop: 15 }} title='ADD TO BASKET' onPress={addBasket} />
            </SafeAreaView>
        </View>
    );
}

export default ProductDetails;
