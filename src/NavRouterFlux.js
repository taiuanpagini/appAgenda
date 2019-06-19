
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

const NavRouterFlux = (props) => {
    const signed = props.sign
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
                    initial={!signed}
                    backButtonTintColor={'#FFFFFF'}
                    drawerLockMode='locked-closed' gesturesEnabled={false} back={true} />
                <Scene key="NovoCadastroEmail"
                    component={NovoCadastroEmail}
                    title=""
                    backButtonTintColor={'#FFFFFF'}
                    drawerLockMode='locked-closed' gesturesEnabled={false} back={true} />
                <Scene key="Home"
                    component={Home}
                    title=""
                    hideNavBar
                    initial={signed}
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

export default NavRouterFlux;