
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
import TabBar from '@mindinventory/react-native-tab-bar-interaction'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fadeValue: 0,
            mensagem: 'Saindo do app'
        }
    }

    logout = () => {
        this.setState({ fadeValue: 1 })
        AsyncStorage.removeItem('@key')
        Actions.reset('Inicial')
    }

    confirmaLogout = () => {
        Alert.alert(
            'Confirmar',
            'Deseja realmente sair do app?',
            [
                {
                    text: 'Não'
                },
                { text: 'Sim', onPress: () => this.logout() }
            ]
        )
    }

    render() {
        return (
            // <Fragment>
            //     <Loading fadeValue={this.state.fadeValue} mensagem={this.state.mensagem} />
            //     <TouchableOpacity onPress={() => { this.confirmaLogout() }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Home</Text></TouchableOpacity>
            // </Fragment>
            <TabBar>
                <TabBar.Item
                    icon={require('../assets/icones/icone_cancela_medicamento.png')}
                    selectedIcon={require('../assets/icones/icone_cancela_medicamento.png')}
                    title="Tab1"
                    screenBackgroundColor={{ backgroundColor: '#008080' }}
                >
                    <View>
                        {/*Page Content*/}
                    </View>
                </TabBar.Item>
                <TabBar.Item
                    icon={require('../assets/icones/icone_confirma.png')}
                    selectedIcon={require('../assets/icones/icone_cancela_medicamento.png')}
                    title="Tab2"
                    screenBackgroundColor={{ backgroundColor: '#F08080' }}
                >
                    <View>
                        {/*Page Content*/}
                    </View>
                </TabBar.Item>
                <TabBar.Item
                    icon={require('../assets/icones/icone_sincronizar_smartphone.png')}
                    selectedIcon={require('../assets/icones/icone_cancela_medicamento.png')}
                    title="Tab3"
                    screenBackgroundColor={{ backgroundColor: '#485d72' }}
                >
                    <View>
                        {/*Page Content*/}
                    </View>
                </TabBar.Item>
            </TabBar>
        )
    }
}

export default Home;