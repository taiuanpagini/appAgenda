
// app/index.js

import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Inicial from './pages/Inicial';
import Code from './pages/Code';
import Login from './pages/Login';
import LoginEmail from './pages/LoginEmail';
import NovoCadastroEmail from './pages/NovoCadastroEmail';
import Home from './pages/Home';
import AsyncStorage from '@react-native-community/async-storage';

const App = (props) => {
    AsyncStorage.getItem('@key')
        .then((token) => {
            if (token != '' || token != null) {
                props.sign = 'true'
            } else {
                props.sign = 'false'
            }
            console.log(props)
        })
    return (
        <Router navigationBarStyle={styles.navBar} backButtonTextStyle={styles.backButtonTextStyle}
            barButtonIconStyle={styles.barButtonIconStyle}>
            <Stack key="root" >
                <Scene key="Inicial"
                    component={Inicial}
                    title="Inicial"
                    hideNavBar
                    drawerLockMode='locked-closed' gesturesEnabled={false} back={true} />
                <Scene key="Code"
                    component={Code}
                    title="Code"
                    hideNavBar
                    drawerLockMode='locked-closed' gesturesEnabled={false} back={true} />
                <Scene key="Login"
                    component={Login}
                    title="Login"
                    hideNavBar
                    drawerLockMode='locked-closed' gesturesEnabled={false} back={true} />
                <Scene key="LoginEmail"
                    component={LoginEmail}
                    title=""
                    initial={ props.sign === false ? false : true}
                    drawerLockMode='locked-closed' gesturesEnabled={false} back={true} />
                <Scene key="NovoCadastroEmail"
                    component={NovoCadastroEmail}
                    title=""
                    drawerLockMode='locked-closed' gesturesEnabled={false} back={true} />
                <Scene key="Home"
                    component={Home}
                    title=""
                    hideNavBar
                    initial={ props.sign === true ? true : false}
                    drawerLockMode='locked-closed' gesturesEnabled={false} back={true} />
            </Stack>
        </Router>
    );
}

const styles = {
    navBar: {
        backgroundColor: '#fe525e',
        borderBottomWidth: 0
    }
}

export default App;