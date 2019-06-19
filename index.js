/**
 * @format
 */

import React, { PureComponent } from 'react'
import { AppRegistry } from 'react-native';
// import App from './src/index';
import { name as appName } from './app.json';
import NavRouterFlux from './src/NavRouterFlux.js';
import AsyncStorage from '@react-native-community/async-storage';
import { isSignedIn } from '../agenda/src/services/auth';
import NetInfo from "@react-native-community/netinfo";

export default class App extends PureComponent {
    _willMount = false

    constructor(props) {
        super(props)
        this.state = {
            signed: false,
            signLoaded: false,
        }
    }

    //REMOVE O EVENTO
    componentWillUnmount = () => {
        this._willMount = false
    }

    componentDidMount() {
        console.disableYellowBox = true

        AsyncStorage.getItem('@key')
            .then((token) => {
                if (token == '' || token == null) {
                    this.setState({ signed: false, signLoaded: true })
                } else {
                    this.setState({ signed: true, signLoaded: true })
                }
            })
    }

    render() {
        const { signLoaded, signed } = this.state

        if (!signLoaded) {
            return null
        }

        return <NavRouterFlux sign={signed} />
    }
}

AppRegistry.registerComponent(appName, () => App);
