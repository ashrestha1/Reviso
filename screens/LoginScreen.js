import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Animated, { Easing } from 'react-native-reanimated';
import {
  TapGestureHandler,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import axios from 'axios';
import { Shake } from 'react-native-motion';

const { width, height } = Dimensions.get('window');
const {
  Value,
  block,
  cond,
  set,
  Clock,
  stopClock,
  startClock,
  clockRunning,
  timing,
  debug,
  interpolate,
  Extrapolate,
} = Animated;

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export default ({ navigation }) => {
  const [buttonOpacity, setButtonOpacity] = useState(new Value(1));
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [value, setValue] = useState(0);
  const [loginText, setLoginText] = useState('Login');

  const startAnimation = () => {
    setValue(value + 1);
  };

  const loginPressed = () => {
    const data = JSON.stringify({
      username: username,
      password: password,
    });

    axios
      .post('http://16.162.3.244/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        save('token', res.data.token);

        navigation.navigate('Home', { token: res.data.token });
      })
      .catch((err) => {
        startAnimation();
        setLoginText('Wrong credentials');
        setTimeout(function () {
          setLoginText('Login');
        }, 3000);

        console.log(err);
      });
  };

  const onStateChange = (e) => {
    if (e.nativeEvent.state === State.END) {
      setButtonOpacity(setTiming(new Clock(), 1, 0));
    }
  };

  const onCloseState = (e) => {
    if (e.nativeEvent.state === State.END) {
      setButtonOpacity(setTiming(new Clock(), 0, 1));
    }
  };

  const transform = (f, t) => {
    return interpolate(buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [f, t],
      extrapolate: Extrapolate.CLAMP,
    });
  };

  const setTiming = (clock, value, distance) => {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };

    const config = {
      duration: 500,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease),
    };

    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, distance),
        startClock(clock),
      ]),

      timing(clock, state, config),
      // cond(state.finished, debug('stop clock', stopClock(clock))),
      state.position,
    ]);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Text>hi</Text>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: transform(-height / 3, 0) }],
            backgroundColor: '#b7d1d2',
          }}
        >
          <Animated.Image
            resizeMode="contain"
            style={{
              ...styles.image,
              transform: [{ translateY: transform(height / 4.5, 0) }],
            }}
            source={require('../assets/images/46.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={{
            ...styles.textContainer,
            transform: [{ translateY: transform(-200, 0) }],
            opacity: buttonOpacity,
          }}
        >
          <Text
            style={{
              ...styles.textStyle,
              fontSize: width / 18,
              color: '#2e808b',
            }}
          >
            Welcome to Reviso
          </Text>

          <Text style={{ ...styles.textStyle, fontSize: width / 15 }}>
            Train your Brain
          </Text>
        </Animated.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Animated.View
              style={{
                ...styles.button,
                backgroundColor: '#f7b640',
                opacity: buttonOpacity,
                transform: [{ translateY: transform(100, 1) }],
              }}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </Animated.View>
          </TouchableOpacity>
          <TapGestureHandler onHandlerStateChange={onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: buttonOpacity,
                transform: [{ translateY: transform(100, 1) }],
              }}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </Animated.View>
          </TapGestureHandler>

          <Animated.View
            style={{
              ...styles.loginContainer,
              ...StyleSheet.absoluteFill,
              zIndex: transform(1, -1),
              opacity: transform(1, 0),
              transform: [{ translateY: transform(0, 100) }],
            }}
          >
            <TapGestureHandler onHandlerStateChange={onCloseState}>
              <Animated.View
                style={{
                  ...styles.downArrowContainer,
                  transform: [{ rotate: transform(0, 2) }],
                }}
              >
                <Image
                  style={styles.downArrow}
                  source={require('../assets/images/13.png')}
                />
              </Animated.View>
            </TapGestureHandler>
            <Shake
              value={value}
              type="timing"
              useNativeDriver={true}
              style={[StyleSheet.absoluteFill, { marginTop: 20 }]}
            >
              <TextInput
                style={styles.inputText}
                placeholderTextColor="gray"
                onChangeText={(val) => setUsername(val)}
                placeholder="Username"
              />
              <TextInput
                style={styles.inputText}
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={(val) => setPassword(val)}
                defaultValue={password}
                placeholder="Password"
              />

              <TouchableOpacity onPress={loginPressed}>
                <View
                  style={{
                    ...styles.button,
                    backgroundColor: '#4e8896',
                    shadowOffset: { width: 2, height: 2 },
                    shadowColor: '#000',
                    shadowOpacity: 0.2,
                    elevation: 3,
                  }}
                >
                  <Text style={{ fontWeight: 'bold', color: '#FFF' }}>
                    {loginText}
                  </Text>
                </View>
              </TouchableOpacity>
            </Shake>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#b7d1d2',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    bottom: 50,
    height: null,
    width: null,
    borderRadius: 100,
  },
  buttonContainer: {
    justifyContent: 'center',
    height: height / 3,
    zIndex: 0,
  },
  button: {
    backgroundColor: '#FFF',
    marginVertical: 5,
    marginHorizontal: 30,
    height: height / 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: width / 23,
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#FFF',
    fontWeight: '400',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    position: 'absolute',
    top: 80,
  },
  loginContainer: {
    height: height / 3,
    // backgroundColor: '#FFF',
    top: null,
    justifyContent: 'center',
  },
  inputText: {
    height: 50,
    borderRadius: 30,
    borderColor: '#2f818c',
    backgroundColor: 'white',
    borderWidth: 0.5,
    marginHorizontal: 30,
    marginVertical: 5,
    paddingLeft: 10,
    zIndex: 1,
  },
  downArrow: {
    height: 30,
    width: 30,
  },
  downArrowContainer: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    position: 'absolute',
    top: -15,
    left: width / 2 - 20,
    padding: 3,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
