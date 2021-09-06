import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native';
import FormInput from '../components/FormInput';
import TextButton from '../components/TextButton';
import { auth } from '../util/firebase';


function LogIn({ props, navigation }) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [msg, setMsg] = useState(null);

    function authenticate() {

        // if ((!email) || (email == '')) {
        //     setMsg('Email inválido');
        //     return;
        // }

        // if ((!password) || (password.length < 6)) {
        //     setMsg('Senha inválida');
        //     return;
        // }

        // setMsg(null);

        // auth.signInWithEmailAndPassword(email, password).then(userCredential => {
        //     navigation.navigate('Home');
        // }
        // ).catch((error) => {
        //     if (error.code = 'auth/wrong-password') {
        //         setMsg('Usuário ou senha inválidos');
        //     } else {
        //         setMsg('Erro ao autenticar. Verifique sua conexão com a Internet.');
        //     }
        // });
        navigation.navigate('Home');
    }

    function forgotPassword() {
        if ((!email) || (email == '')) {
            setMsg('Email inválido');
            return;
        }
        auth.sendPasswordResetEmail(email).then(() => setMsg('E-mail enviado'));
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.safeview}>
                <Text style={[styles.title, { marginTop: 100 }]}>LOGIN</Text>
                <View style={{ flex: 1 }} />
                <Text style={{ textAlign: 'center', color: '#F99928' }}>{msg}</Text>
                <FormInput title='E-MAIL' holder='seu@email.com' onChangeText={text => setEmail(text)} />
                <FormInput style={{ marginTop: 25 }} title='PASSWORD' holder='Password' password={true} onChangeText={text => setPassword(text)} />
                <TouchableHighlight onPress={forgotPassword}>
                    <Text style={styles.forgotPass}>Forgot Password</Text>
                </TouchableHighlight>
                <TextButton title='LOGIN' onPress={authenticate} />
            </SafeAreaView>
        </View>
    );
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
    },
    forgotPass: {
        fontFamily: 'Poppins',
        fontSize: 15,
        textAlign: 'right',
        fontWeight: '400',
        color: '#A3A3A3',
        marginTop: 10,
        marginBottom: 50,

    }
});


export default LogIn;