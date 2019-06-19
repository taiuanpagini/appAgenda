
// app/ScarletScreen.js

import React, { Component, Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input, Button } from 'react-native-elements';
import firebase from 'react-native-firebase'
import Loading from '../components/Loading';
import AsyncStorage from '@react-native-community/async-storage';
import { isExpressionWrapper } from '@babel/types';

class LoginEmail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            senha: '',
            fadeValue: 0,
            mensagem: 'Aguarde ...'
        }
    }

    login = () => {
        this.setState({ fadeValue: 1 })
        firebase
            .auth()
            .signInWithEmailAndPassword((this.state.email).toLowerCase(), this.state.senha)
            .then((res) => {
                // console.log(res.user._user.uid)
                AsyncStorage.setItem('@key', res.user._user.uid)
                this.setState({ fadeValue: 0 })
                Actions.reset('Home')
            })
            .catch((error) => {
                console.log(error.code)
                if (error.code == 'auth/invalid-email') {
                    var title = 'E-mail inválido'
                    var description = 'O e-mail digitado é inválido.'
                    this.validaForm(title, description)
                    this.setState({ fadeValue: 0 })
                } else if (isExpressionWrapper.code == 'auth/wrong-password') {
                    var title = 'Senha incorreta'
                    var description = 'A senha digitada esta incorreta.'
                    this.validaForm(title, description)
                    this.setState({ fadeValue: 0 })
                } else if (isExpressionWrapper.code == 'auth/user-not-found') {
                    var title = 'Usuário incorreto'
                    var description = 'Nenhum usuário encontrado com esse e-mail.'
                    this.validaForm(title, description)
                    this.setState({ fadeValue: 0 })
                } else {
                    this.setState({ fadeValue: 0 })
                }
            })
    }

    validaCodigo = () => {
        if (this.state.email == '') {
            var title = 'E-mail'
            var description = 'O e-mail não pode ficar em branco!'
            this.validaForm(title, description)
        } else if (this.state.senha == '') {
            var title = 'Senha'
            var description = 'A senha não pode ficar em branco!'
            this.validaForm(title, description)
        } else {
            this.login()
        }
    }

    validaForm = (title, description) => {
        Alert.alert(
            title,
            description
        )
    }

    render() {
        const { email, senha } = this.state
        return (
            <Fragment>
                <Loading fadeValue={this.state.fadeValue} mensagem={this.state.mensagem} />
                <View style={styles.container}>
                    <Icon
                        name="ios-book"
                        size={170}
                        color="#FFFFFF"
                    />
                    <Text style={styles.welcome}>Fazer login.</Text>
                    <Text style={styles.description}>Digite abaixo seu e-mail e a senha cadastrados.</Text>
                    <Input
                        placeholder='Digite seu e-mail'
                        inputContainerStyle={styles.input}
                        leftIconContainerStyle={styles.icon}
                        leftIcon={
                            <Icon
                                name='ios-mail'
                                size={23}
                                color='#FFFFFF'
                            />
                        }
                        value={email}
                        onChangeText={email => this.setState({ email })}
                        keyboardType="email-address"
                    />
                    <Input
                        secureTextEntry
                        placeholder='Digite sua senha'
                        inputContainerStyle={[styles.input, styles.inputBottom]}
                        leftIconContainerStyle={styles.icon}
                        leftIcon={
                            <Icon
                                name='ios-code-working'
                                size={23}
                                color='#FFFFFF'
                            />
                        }
                        value={senha}
                        onChangeText={senha => this.setState({ senha })}
                    />
                    <Button
                        buttonStyle={styles.btnProximo}
                        titleStyle={styles.txtBtnProximo}
                        onPress={() => this.validaCodigo()}
                        icon={
                            <Icon
                                name="ios-save"
                                size={25}
                                color="#FFFFFF"
                                style={styles.iconBtn}
                            />
                        }
                        iconRight
                        title="Fazer Login"
                    />
                    <TouchableOpacity onPress={() => Actions.push('NovoCadastroEmail')}>
                        <Text style={{ color: '#FFFFFF', marginTop: 10 }}>Não tem cadastro? Clique aqui e faça!</Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fe525e',
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        fontWeight: '500',
        paddingRight: 30,
        paddingLeft: 30
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        marginBottom: 20,
        marginTop: 0,
        color: '#ffffff',
        fontWeight: '100',
        paddingRight: 10,
        paddingLeft: 10
    },
    input: {
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
    inputBottom: {
        marginTop: 20
    },
    icon: {
        paddingRight: 10,
        paddingLeft: 10
    },
    btnProximo: {
        marginTop: 20,
        backgroundColor: '#2dec68',
        borderRadius: 30,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10
    },
    txtBtnProximo: {
        fontSize: 20,
        color: '#FFFFFF',
        marginRight: 10
    },
    iconBtn: {
        marginTop: 5
    },
    label: {
        color: '#FFFFFF'
    }
});

export default LoginEmail;