import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
        }}
      >
        <LottieView
          source={require('../assets/welcome.json')}
          autoPlay
          loop={false}
          speed={0.2}
          onAnimationFinish={() => {
            this.props.navigation.replace('Login');
          }}
        />
      </View>
    );
  }
}
