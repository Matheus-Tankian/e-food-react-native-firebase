import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <Text style={styles.title}>FOOD-</Text>
                <Text style={[styles.title, { color: '#2FDBBC' }]}>E</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'BebasNeue',
        fontSize: 18,
        fontWeight: '400',
        color: '#FFF',
    },
});


export default Title;