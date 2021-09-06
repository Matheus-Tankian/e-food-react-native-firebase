import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import ProductPreview from '../components/ProductPreview';
import { db } from '../util/firebase';
import { Product } from '../entity/Product';


function ProductList({ props, navigation }) {

    const [products, setProducts] = useState(null);
    const [queryString, setQueryString] = useState('');

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

    return (
        <SafeAreaView style={styles.safeview} >
            <FormInput title='SEARCH' onChangeText={setQueryString} />
            <Text style={[styles.title, { fontSize: 12, marginTop: 30, marginBottom: 15 }]}>SEARCH RESULTS</Text>

            {products != null ?
                <FlatList
                    data={products.filter(p => p.name.toLowerCase().includes(queryString.toLowerCase()))}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
                            <ProductPreview product={item} />
                        </TouchableOpacity>
                    }
                />
                :
                <View sFtyle={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Carregando dados...</Text>
                    <ActivityIndicator size="large" />
                </View>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeview: {
        flex: 1,
        margin: 20,
        marginTop: 70,
        marginBottom: 30,
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
    },
});


export default ProductList;
