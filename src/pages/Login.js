
// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input, Button } from 'react-native-elements';
import firebase from 'react-native-firebase'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      codigo: ''
    }
  }

  render() {
    const { codigo } = this.state
    return (
      <View style={styles.container}>
        <Icon
            name="ios-book"
            size={170}
            color="#FFFFFF"
        />
        <Text style={styles.welcome}>Bem vindo ao App</Text>
        <Text style={[styles.description, styles.descriptionLogin]}>
          Escolha como deseja fazer o login
        </Text>
        <Button
          buttonStyle={[styles.btnProximo, styles.btnMail]}
          titleStyle={[styles.txtBtnProximo, styles.txtBtnProximoLogin]}
          onPress={() => Actions.push('LoginEmail')}
          icon={
            <Icon
              name="ios-mail"
              size={30}
              color="#FFFFFF"
              style={styles.iconBtn}
            />
          }
          iconLeft
          title="Login com e-mail"
        />
        <Button
          buttonStyle={[styles.btnProximo, styles.btnFacebook]}
          titleStyle={[styles.txtBtnProximo, styles.txtBtnProximoLogin]}
          onPress={() => this.loginFacebook()}
          icon={
            <Icon
              name="logo-facebook"
              size={30}
              color="#FFFFFF"
              style={styles.iconBtn}
            />
          }
          iconLeft
          title="Login com Facebook"
        />
        <Button
          buttonStyle={[styles.btnProximo, styles.btnGoogle]}
          titleStyle={[styles.txtBtnProximo, styles.txtBtnProximoLogin]}
          onPress={() => this.validaCodigo()}
          icon={
            <Icon
              name="logo-google"
              size={30}
              color="#FFFFFF"
              style={styles.iconBtn}
            />
          }
          iconLeft
          title="Login com Google"
        />
      </View>
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
    color: '#ffffff',
    fontWeight: '100',
    paddingRight: 10,
    paddingLeft: 10
  },
  descriptionLogin: {
      marginTop: 0
  },
  input: {
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF'
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
    paddingTop: 5,
    paddingBottom: 5
  },
  btnMail: {
      backgroundColor: '#113c93'
  },
  btnFacebook: {
    backgroundColor: '#3372f3'
  },
  btnGoogle: {
    backgroundColor: '#ea330f'
  },
  txtBtnProximo: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 10
  },
  txtBtnProximoLogin: {
      fontWeight: '300',
      fontSize: 16
  },
  iconBtn: {
    marginTop: 2
  },
  label: {
    color: '#FFFFFF'
  }
});

export default Login;