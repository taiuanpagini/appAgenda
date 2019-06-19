
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

class Code extends Component {

  constructor(props) {
    super(props)
    this.state = {
      codigo: ''
    }
  }
  validaCodigo = () => {
    if (this.state.codigo == '') {
      Alert.alert(
        'Código inválido',
        'Você deve digitar um código para prosseguir!'
      )
    } else {
      Actions.reset('LoginEmail')
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
        <Text style={styles.welcome}>Digite o código do estabelecimento abaixo.</Text>
        <Text style={styles.description}>
          Se você ainda não tem esse código, deve solicitar ao proprietário. Com o código em mãos apenas coloque no campo abaixo e clique em próximo.
        </Text>
        <Input
          placeholder='Digite o código aqui'
          inputContainerStyle={styles.input}
          leftIconContainerStyle={styles.icon}
          leftIcon={
            <Icon
              name='ios-barcode'
              size={23}
              color='#FFFFFF'
            />
          }
          value={codigo}
          onChangeText={codigo => this.setState({ codigo })}
        />
        <Button
          buttonStyle={styles.btnProximo}
          titleStyle={styles.txtBtnProximo}
          onPress={() => this.validaCodigo()}
          icon={
            <Icon
              name="ios-arrow-round-forward"
              size={35}
              color="#FFFFFF"
              style={styles.iconBtn}
            />
          }
          iconRight
          title="Próximo"
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

export default Code;