import React, { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, FlatList, View, TouchableOpacity, Image, Alert } from 'react-native';
import TextButton from '../components/TextButton';
import { AppContext } from '../components/AppContext';
import { Styles } from '../components/Styles';

function Basket({ navigation }) {

    const { basket, setBasket } = useContext(AppContext);

    const [total, setTotal] = useState(0);

    useEffect(() => { calculateTotal(); }, []);

    function removeProduct(pos) {
        let newBasket = basket;
        newBasket.splice(pos, 1);
        setBasket(newBasket);
        calculateTotal();
    }

    function removeDialog(pos) {
        Alert.alert(
            "Remover",
            "Deseja remover o produto da cesta?",
            [
                {
                    text: "Cancelar",
                    style: "destructive"
                },
                { text: "Confirmar", onPress: () => removeProduct(pos) }
            ]
        );
    }

    function calculateTotal() {
        let total = 0;
        basket.forEach(product => {
            total += product.price;
        });
        setTotal(total);
    }

    function renderProduct(product, pos) {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 10 }} resizeMode='cover' source={{ uri: product.img }} />
                    <Text style={Styles.name}>{product.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={Styles.price}>{product.priceLabel}</Text>

                    <TouchableOpacity onPress={() => removeDialog(pos)}>
                        <Image source={require('../../assets/subtract.png')} style={Styles.remove} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={Styles.safeview} >
            {(basket.length != 0) ?
                <View style={{ flex: 1 }}>
                    <Text style={Styles.pageTitle}>PEDIDO</Text>
                    <FlatList
                        data={basket}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => renderProduct(item, index)}
                    />
                    <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={Styles.pageTitle}>TOTAL</Text>
                        <Text style={[Styles.pageTitle, { color: '#2FDBBC' }]}>{`R$ ${total},00`}</Text>
                    </View>
                    <TextButton title='COMPRAR'></TextButton>
                </View>
                :
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <Text style={[Styles.title, { textAlign: 'center' }]}>NENHUM ITEM ADICIONADO NA CESTA</Text>
                    <TextButton title='VOLTAR' onPress={() => navigation.goBack()}></TextButton>
                </View>
            }

        </SafeAreaView>
    );
}

export default Basket;
