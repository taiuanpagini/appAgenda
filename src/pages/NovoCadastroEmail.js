
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

class NovoCadastroEmail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            senha: '',
            nome: '',
            fadeValue: 0
        }
    }

    handleSignUp = () => {
        this.setState({ fadeValue: 1 })
        firebase
            .auth()
            .createUserWithEmailAndPassword((this.state.email).toLowerCase(), this.state.senha)
            .then((res) => {
                console.log(res)
            })
            // .catch(error => this.setState({ errorMessage: error.message }))
            .catch(
                (error) => {
                    console.log(error.code)
                    if (error.code == 'auth/invalid-email') {
                        var title = 'E-mail inválido'
                        var description = 'O e-mail digitado é inválido.'
                        this.validaForm(title, description)
                        this.setState({ fadeValue: 0 })
                    } else if (error.code == 'auth/weak-password') {
                        var title = 'Senha fraca'
                        var description = 'A senha deve ter no mínimo 6 caractéres.'
                        this.validaForm(title, description)
                        this.setState({ fadeValue: 0 })
                    } else if (error.code == 'auth/email-already-in-use') {
                        var title = 'E-mail já existe'
                        var description = 'Já existe um usuário com esse e-mail.'
                        this.validaForm(title, description)
                        this.setState({ fadeValue: 0 })
                    } else {
                        Actions.reset('Home')
                        this.setState({ fadeValue: 0 })
                    }
                }
            )
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
            this.handleSignUp()
        }
    }

    validaForm = (title, description) => {
        Alert.alert(
            title,
            description
        )
    }

    render() {
        const { nome, email, senha } = this.state
        return (
            <Fragment>
                <Loading fadeValue={this.state.fadeValue} mensagem={this.state.mensagem} />
                <View style={styles.container}>
                    <Icon
                        name="ios-book"
                        size={170}
                        color="#FFFFFF"
                    />
                    <Text style={styles.welcome}>Cadastro com e-mail.</Text>
                    <Text style={styles.description}>Digite os dados abaixo e faça seu cadastro, após acesse o sistema.</Text>
                    {/* <Input
                    placeholder='Digite seu nome'
                    inputContainerStyle={styles.input}
                    leftIconContainerStyle={styles.icon}
                    leftIcon={
                        <Icon
                            name='ios-happy'
                            size={23}
                            color='#FFFFFF'
                        />
                    }
                    value={nome}
                    onChangeText={nome => this.setState({ nome })}
                /> */}
                    <Input
                        placeholder='Digite seu e-mail'
                        inputContainerStyle={[styles.input, styles.inputBottom]}
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
                        title="Cadastrar"
                    />
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

export default NovoCadastroEmail;