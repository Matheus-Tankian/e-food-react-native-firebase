import React, { useContext, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { AppContext } from '../components/AppContext';
import FormInput from '../components/FormInput';
import TextButton from '../components/TextButton';
import { auth } from '../util/firebase';
import { Styles } from '../components/Styles';

function LogIn({ navigation }) {
    const { setUser } = useContext(AppContext);

    const [email, setEmail] = useState('vitorcruz8143@gmail.com');//teste@teste.com//vitorcruz8143@gmail.com
    const [password, setPassword] = useState('123456');//123456
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
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                <TouchableOpacity onPress={forgotPassword}>
                    <Text style={{ color: '#A3A3A3', textAlign: 'left'}}>Cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={forgotPassword}>
                    <Text style={{ color: '#A3A3A3', textAlign: 'right'}}>Esqueci a senha</Text>
                </TouchableOpacity>
                </View>
                <TextButton style={{ marginTop: 30 }} title='ENTRAR' onPress={authenticate} />
            </SafeAreaView>
        </View>
    );
}

export default LogIn;