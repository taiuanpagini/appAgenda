import React, { Component } from 'react';
import {
    Animated,
    ActivityIndicator,
    StyleSheet,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Loading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={this.props.fadeValue != 0 ? styles.container : styles.hide}>
                {/* <Animated.Image style={[styles.animationView]} source={require("../../../assets/img/logo.png")}>
        </Animated.Image> */}
                <Icon
                    name="ios-book"
                    size={170}
                    color="#FFFFFF"
                />
                <ActivityIndicator style={styles.indicator} size="large" color="white"></ActivityIndicator>
                <Text style={styles.white}>{this.props.mensagem}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fe525e',
        zIndex: 1,
        position: 'relative'
    },
    animationView: {
        width: 244,
        height: 97,
    },
    indicator: {
        marginTop: 40,
        marginBottom: 20
    },
    hide: {
        width: 0,
        height: 0
    },
    white: {
        color: '#FFFFFF',
        fontSize: 16
    }
});

export default Loading
