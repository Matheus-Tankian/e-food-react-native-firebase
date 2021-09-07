import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './Styles';

class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <Text style={Styles.logo}>FOOD-</Text>
                <Text style={[Styles.logo, { color: '#2FDBBC' }]}>E</Text>
            </View>
        );
    }

}

export default Title;