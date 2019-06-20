
// app/ScarletScreen.js

import React, { Component, Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input, Button } from 'react-native-elements';
import firebase from 'react-native-firebase'
import Loading from '../components/Loading';
import AsyncStorage from '@react-native-community/async-storage';
import TabBar from '@mindinventory/react-native-tab-bar-interaction'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
LocaleConfig.locales['prBR'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'prBR'
import Svg,{
    Circle,
    Path
} from 'react-native-svg';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fadeValue: 0,
            mensagem: 'Saindo do app',
            items: {}
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

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.item}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }


    render() {
        return (
            <Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#fe525e' }} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    <TabBar>
                        <TabBar.Item
                            icon={require('../assets/icones/icone_cancela_medicamento.png')}
                            selectedIcon={require('../assets/icones/icone_cancela_medicamento.png')}
                            title="Tab1"
                            screenBackgroundColor={{ backgroundColor: '#008080' }}
                        >
                            <View>
                                <Text>dasdasd</Text>
                            </View>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={require('../assets/icones/icone_confirma.png')}
                            selectedIcon={require('../assets/icones/icone_cancela_medicamento.png')}
                            title="Tab2"
                            screenBackgroundColor={{ backgroundColor: '#FFFFFF' }}
                        >
                            <Agenda
                                items={this.state.items}
                                loadItemsForMonth={this.loadItems.bind(this)}
                                selected={new Date()}
                                renderItem={this.renderItem.bind(this)}
                                renderEmptyDate={this.renderEmptyDate.bind(this)}
                                rowHasChanged={this.rowHasChanged.bind(this)}
                                theme={{
                                    backgroundColor: '#FFFFFF', agendaTodayColor: '#fe525e', selectedDayBackgroundColor: '#fe525e', dotColor: '#fe525e'
                                }}
                            />


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
                </SafeAreaView>
            </Fragment>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});