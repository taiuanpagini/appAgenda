
// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import AppIntroSlider from 'react-native-app-intro-slider'

const slides = [
  {
    key: 'somethun',
    title: 'Sua agenda \n na palma da mão',
    text: 'Marque e desmarque compromissos \nde maneira facil.', 
    image: require('../assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Muita facilidade',
    text: 'Veja sua agenda \nem qualquer lugar.',
    image: require('../assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Sem inconvenientes',
    text: 'Compromissos duplicados \nnunca mais.',
    image: require('../assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
]

class Inicial extends Component {
  state = {
    showRealApp: false
  }

  _renderItem = (item) => {
    return (
      <View style={style.slide}>
        <Text style={style.title}>{item.title}</Text>
        <Image style={style.image} source={item.image} />
        <Text style={style.text}>{item.text}</Text>

      </View>
    )
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true })
    Actions.reset('Code')
  }

  _onSkip = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true })
    Actions.reset('Code')
  }

  render() {
    if (this.state.showRealApp) {
      return <App />
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone} onSkip={this._onSkip} showSkipButton={true} skipLabel={'Pular'} nextLabel={'Próximo'} doneLabel={'Pronto'} />
    }
  }
}

const style = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#fe525e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain'
    
  },
  text: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 17,
    fontWeight: '100'
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});

export default Inicial;