import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, FlatList, View, ActivityIndicator, TouchableOpacity, Image, Button } from 'react-native';
import FormInput from '../components/FormInput';
import ProductPreview from '../components/ProductPreview';
import { db } from '../util/firebase';
import { Product } from '../entity/Product';
import { Styles } from '../components/Styles';

function ProductList({ navigation }) {

    const [products, setProducts] = useState(null);
    const [queryString, setQueryString] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        let prodList = [];
        async function loadProds() {
            await db.collection('products').get().then(querySnapshot => {
                querySnapshot.docs.forEach(product => {
                    prodList.push(new Product(product.data()));
                });
            });
            setProducts(prodList);
        }
        loadProds();
    }, []);

    function displayMsg(txt) {
        setMsg(txt);
    }

    return (
        <SafeAreaView style={[Styles.safeview, { justifyContent: 'flex-start' }]} >
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 30}}>
                <FormInput style={{flex:1}} title='BUSCA' onChangeText={setQueryString} />
                <TouchableOpacity style={{ marginHorizontal: 5}} onPress={() => navigation.navigate('Basket')}>
                    <Image source={require('../../assets/basket.png')} style={{ width: 45, height: 45 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'flex-end', marginHorizontal: 5 }} onPress={() => navigation.navigate('AddLista')}>
                    <Image source={require('../../assets/add.png')} style={{ width: 45, height: 45 }} />
                </TouchableOpacity>
            </View>

           
            
            <Text style={{ textAlign: 'right', marginVertical: 15, color: '#F99928', fontSize: 15 }}>{msg}</Text>
            <Text style={[Styles.pageTitle, { fontSize: 15, marginBottom: 15, color: '#000',}]}>RESULTADOS</Text>
            {products != null ?
                <FlatList
                    data={products.filter(p => p.name.toLowerCase().includes(queryString.toLowerCase()))}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
                            <ProductPreview product={item} onAdd={displayMsg} />
                        </TouchableOpacity>
                    }
                />
                :
                <View sFtyle={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',color: '#000', }}>
                    <Text>Carregando dados...</Text>
                    <ActivityIndicator size="large" />
                </View>}
        </SafeAreaView>
    );
}

export default ProductList;
