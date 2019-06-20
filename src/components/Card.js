import React, { PureComponent, Fragment } from 'react'
import { View, Image, Dimensions, TouchableOpacity, Text, Button, Alert, NativeModules } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../style/Padrao'
import Moment from 'moment'

export default class Card extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        // console.log(this.props)
    }

    tarefas = () => {
        var tarefas = this.props
        var dataAtualMili = Moment(new Date()).format('DD/MM/YYYY')
        var dataTarefa = tarefas.dueDate
        return (
            <View style={[styleLocal.item,tarefas.sent === 1 ? styleLocal.enviado : tarefas.sent === 0 && dataTarefa < dataAtualMili ? styleLocal.naoEnviado : null]}>
                <View>
                    {tarefas.subjectName ?
                        <View>
                            <View style={styleLocal.containerTarefa}>
                                <View style={styleLocal.containerIcon}>
                                    <Icon style={styles.iconTarefa} name='align-justify' />
                                </View>
                                <Text style={[styleLocal.tituloTarefa]}>
                                    {tarefas.title.toUpperCase()}
                                </Text>
                            </View>
                            <View style={styleLocal.containerTarefa}>
                                <View style={styleLocal.containerIcon}>
                                    <Icon style={styles.iconTarefa} name='book' />
                                </View>
                                <Text style={styleLocal.nameItem}>
                                    {tarefas.subjectName}
                                </Text>
                            </View>
                            <View style={styleLocal.containerTarefa}>
                                <View style={styleLocal.containerIcon}>
                                    <Icon style={styles.iconTarefa} name='calendar' />
                                </View>
                                <Text style={styleLocal.nameItem}>
                                    {tarefas.dueDate}
                                </Text>
                            </View>
                            <View style={styleLocal.containerTarefa}>
                                <View style={styleLocal.containerIcon}>
                                    <Icon style={styles.iconTarefa} name='paper-plane' />
                                </View>
                                <Text style={styleLocal.nameItem}>
                                Enviado: {tarefas.sent === 1 ? 'Sim' : 'Não'}
                                </Text>
                            </View>
                            <View style={[styleLocal.containerTarefa, styleLocal.noMarginContainerTarefa]}>
                                <View style={styleLocal.containerIcon}>
                                    <Icon style={styles.iconTarefa} name='user' />
                                </View>
                                <Text style={styleLocal.nameItem}>
                                    {tarefas.teacherName}
                                </Text>
                            </View>
                        </View>
                        :
                        <View style={[styleLocal.containerTarefa, styleLocal.noMarginContainerTarefa]}>
                            <Text style={[styleLocal.tituloTarefa]}>
                                {tarefas.title}
                            </Text>
                        </View>
                    }
                </View>
                {/* {tarefas.subjectName ?
                    <View style={styleLocal.containerLetras}>
                        <Text style={styleLocal.textLetras}>TP</Text>
                    </View>
                    : null} */}
            </View>
        )
    }

    render() {
        return (
            this.tarefas()
        )
    }
}

export { CardTarefa }

const styleLocal = {
    containerTarefa: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 5
    },
    noMarginContainerTarefa: {
        marginBottom: 0
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    enviado: {
        backgroundColor: '#ecfbeb'
    },
    naoEnviado: {
        backgroundColor: '#faefef'
    },
    tituloTarefa: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#4F4F4F'
    },
    nameItem: {
        marginLeft: 5,
        color: '#696969'
    },
    containerIcon: {
        width: 15,
        alignItems: 'center'
    },
    containerLetras: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#00ACA4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLetras: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
}