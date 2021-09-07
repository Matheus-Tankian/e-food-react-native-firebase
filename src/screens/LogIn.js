import React, { useContext, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { AppContext } from '../components/AppContext';
import FormInput from '../components/FormInput';
import TextButton from '../components/TextButton';
import { auth } from '../util/firebase';
import { Styles } from '../components/Styles';

function LogIn({ navigation }) {
    const { setUser } = useContext(AppContext);

    const [email, setEmail] = useState('');//teste@teste.com
    const [password, setPassword] = useState('');//123456
    const [msg, setMsg] = useState(null);

    function authenticate() {

        if ((!email) || (email == '')) {
            setMsg('Email inválido');
            return;
        }

        if ((!password) || (password.length < 6)) {
            setMsg('Senha inválida');
            return;
        }

        setMsg(null);

        auth.signInWithEmailAndPassword(email, password).then(userCredential => {
            setUser(userCredential);
            navigation.navigate('Home');
        }
        ).catch((error) => {
            if (error.code = 'auth/wrong-password') {
                setMsg('Usuário ou senha inválidos');
            } else {
                setMsg('Erro ao autenticar. Verifique sua conexão com a Internet.');
            }
        });
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
            <SafeAreaView style={Styles.safeview}>
                <Text style={[Styles.pageTitle, { marginTop: 100 }]}>LOGIN</Text>
                <View style={{ flex: 1 }} />
                <Text style={{ textAlign: 'center', color: '#F99928' }}>{msg}</Text>
                <FormInput title='E-MAIL' holder='seu@email.com' onChangeText={text => setEmail(text)} />
                <FormInput style={{ marginTop: 25 }} title='SENHA' holder='Senha' password={true} onChangeText={text => setPassword(text)} />
                <TouchableOpacity onPress={forgotPassword}>
                    <Text style={{ color: '#A3A3A3', textAlign: 'right', marginVertical: 10 }}>Esqueci a senha</Text>
                </TouchableOpacity>
                <TextButton style={{ marginTop: 30 }} title='ENTRAR' onPress={authenticate} />
            </SafeAreaView>
        </View>
    );
}

export default LogIn;