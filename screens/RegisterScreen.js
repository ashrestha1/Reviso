import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  Modal,
  View,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { BlurView } from 'expo-blur';

import Button from '../components/Button';
import Input from '../components/input';
import { Shake } from 'react-native-motion';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
const argonTheme = {
  COLORS: {
    DEFAULT: '#172B4D',
    PRIMARY: '#5E72E4',
    SECONDARY: '#F7FAFC',
    LABEL: '#FE2472',
    INFO: '#11CDEF',
    ERROR: '#F5365C',
    SUCCESS: '#2DCE89',
    WARNING: '#FB6340',
    /*not yet changed */
    MUTED: '#ADB5BD',
    INPUT: '#DCDCDC',
    INPUT_SUCCESS: '#7BDEB2',
    INPUT_ERROR: '#FCB3A4',
    ACTIVE: '#5E72E4', //same as primary
    BUTTON_COLOR: '#9C26B0', //wtf
    PLACEHOLDER: '#9FA5AA',
    SWITCH_ON: '#5E72E4',
    SWITCH_OFF: '#D4D9DD',
    GRADIENT_START: '#6B24AA',
    GRADIENT_END: '#AC2688',
    PRICE_COLOR: '#EAD5FB',
    BORDER_COLOR: '#E7E7E7',
    BLOCK: '#E7E7E7',
    ICON: '#172B4D',
    HEADER: '#525F7F',
    BORDER: '#CAD1D7',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
  },
};

const { width, height } = Dimensions.get('screen');

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [privileged, setPrivileged] = useState(false);
  const [masterPassword, setMasterPassword] = useState(false);
  const [masterPasswordModal, setMasterPasswordModal] = useState(false);
  const [masterPasswordWrong, setMasterPasswordWrong] = useState(false);
  const [errorCreate, setErrorCreate] = useState(false);
  const [studentSelected, setStudentSelected] = useState(true);
  const [value, setValue] = useState(0);

  const startAnimation = () => {
    setValue(value + 1);
  };

  const masterPasswordInputted = () => {
    if (masterPassword != 'P@ssw0rd') {
      startAnimation();
      setMasterPassword('');
      setMasterPasswordWrong(true);
      setPrivileged(false);
      setStudentSelected(true);
      return;
    } else {
      setPrivileged(true);
      setMasterPasswordModal(false);
      setStudentSelected(false);
    }
  };
  const createPressed = () => {
    if (password.length == 0 || username.length == 0 || name == 0) {
      startAnimation();
      setErrorCreate(true);
      setTimeout(function () {
        setErrorCreate(false);
      }, 3000);
      return;
    }

    const data = JSON.stringify({
      prettyName: name,
      username: username,
      password: password,
      privileged: privileged,
      masterPassword: masterPassword,
    });

    axios
      .post('http://18.166.28.128/signup', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
        navigation.navigate('Login', { token: res.data });
      })
      .catch((err) => {
        console.log(err);
        startAnimation();
      });
  };

  return (
    <>
      <Block flex middle>
        <StatusBar hidden />

        <ImageBackground
          style={{ width, height, zIndex: 1, backgroundColor: '#4e8896' }}
        >
          <Shake
            value={value}
            type="timing"
            useNativeDriver={true}
            style={StyleSheet.absoluteFill}
          >
            <Block safe flex middle>
              <Block style={styles.registerContainer}>
                <Block flex={0.25} middle style={styles.socialConnect}>
                  <Text color="#8898AA" size={14}>
                    Sign up as
                  </Text>
                  <Block row style={{ marginTop: theme.SIZES.BASE }}>
                    <Button
                      style={{
                        ...styles.socialButtons,
                        marginRight: 30,
                        backgroundColor: studentSelected ? '#f7b640' : '#FFF',
                      }}
                      onPress={() => {
                        setStudentSelected(true);
                        setPrivileged(false);
                      }}
                    >
                      <Block row>
                        <Icon
                          family="Ionicon"
                          size={14}
                          color={'black'}
                          style={{ marginTop: 2, marginRight: 5 }}
                        />
                        <Text style={styles.socialTextButtons}>Student</Text>
                      </Block>
                    </Button>
                    <Button
                      disabled={privileged}
                      style={{
                        ...styles.teacherButton,
                        backgroundColor: !studentSelected ? '#f7b640' : '#FFF',
                      }}
                      onPress={() => {
                        setMasterPasswordModal(true);
                      }}
                    >
                      <Block row>
                        <Icon
                          family="Ionicon"
                          size={14}
                          color={'black'}
                          style={{
                            marginTop: 2,
                            marginRight: 5,
                          }}
                        />
                        <Text style={styles.socialTextButtons}>Teacher</Text>
                      </Block>
                    </Button>
                  </Block>
                </Block>
                <Block flex>
                  <Block flex={0.17} middle>
                    <Text color="#8898AA" size={12}>
                      The start of your Journey with Reviso
                    </Text>
                    <Text color="#8898AA" size={10}>
                      Fill in the fields!
                    </Text>
                  </Block>
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          onChangeText={(val) => setName(val)}
                          borderless
                          placeholder="Name"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          onChangeText={(val) => setUsername(val)}
                          borderless
                          placeholder="Username"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      <Block width={width * 0.8}>
                        <Input
                          onChangeText={(val) => setPassword(val)}
                          password
                          borderless
                          placeholder="Password"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />
                        {errorCreate && (
                          <Block row style={styles.remainingCheck}>
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              Fill in the remaining fields
                            </Text>
                          </Block>
                        )}
                        {password.length > 0 && (
                          <Block row style={styles.passwordCheck}>
                            <Text size={12} color={argonTheme.COLORS.MUTED}>
                              password strength:
                            </Text>
                            {password.length >= 8 && (
                              <Text
                                bold
                                size={12}
                                color={argonTheme.COLORS.SUCCESS}
                              >
                                {' '}
                                strong
                              </Text>
                            )}
                            {password.length < 8 && (
                              <Text
                                bold
                                size={12}
                                color={argonTheme.COLORS.ERROR}
                              >
                                {' '}
                                weak
                              </Text>
                            )}
                          </Block>
                        )}
                      </Block>

                      <Block middle row>
                        <Button
                          color="primary"
                          style={styles.createButton}
                          onPress={() => navigation.navigate('Login')}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            BACK
                          </Text>
                        </Button>
                        <Button
                          color="primary"
                          style={styles.createButton}
                          onPress={createPressed}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            CREATE
                          </Text>
                        </Button>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Shake>
        </ImageBackground>
      </Block>
      {masterPasswordModal && (
        <BlurView
          intensity={90}
          style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={masterPasswordModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            <Shake
              value={value}
              type="timing"
              useNativeDriver={true}
              style={StyleSheet.absoluteFill}
            >
              <View style={styles.modal}>
                <Block flex>
                  <TouchableOpacity
                    onPress={() => {
                      setMasterPasswordModal(false);
                      setMasterPasswordWrong(false);
                    }}
                  >
                    <Icon name="progress-close" size={25} color="#8898AA" />
                  </TouchableOpacity>
                  <Block flex={0.2} middle style={{ marginTop: 17 }}>
                    <Text color="#8898AA" size={15}>
                      Enter the Master Password
                    </Text>
                  </Block>
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >
                      <Block width={width * 0.8}>
                        <Input
                          onChangeText={(val) => setMasterPassword(val)}
                          password
                          borderless
                          placeholder="Master Password"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />

                        {masterPasswordWrong && (
                          <Block row style={styles.masterPasswordCheck}>
                            <Text size={12} color={argonTheme.COLORS.MUTED}>
                              Password Invalid:
                            </Text>
                            <Text
                              bold
                              size={12}
                              color={argonTheme.COLORS.ERROR}
                            >
                              Wrong input!
                            </Text>
                          </Block>
                        )}
                      </Block>

                      <Block middle>
                        <Button
                          color="primary"
                          style={styles.createButton}
                          onPress={masterPasswordInputted}
                        >
                          <Text bold size={20} color={argonTheme.COLORS.WHITE}>
                            Enter
                          </Text>
                        </Button>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </View>
            </Shake>
          </Modal>
        </BlurView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.75,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },
  socialConnect: {
    paddingTop: 20,
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  teacherButton: {
    width: 120,
    height: 40,
    backgroundColor: 'white',
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: '#303030',
    fontWeight: '800',
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 0,
    paddingBottom: 0,
  },
  remainingCheck: {
    paddingLeft: 15,
  },
  masterPasswordCheck: {
    paddingLeft: 15,
  },
  createButton: {
    width: width * 0.35,
    marginTop: 25,
  },
  modal: {
    flex: 1,
    margin: 210,
    width: '90%',
    backgroundColor: '#F5F5F5',
    padding: 10,
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  nonBlurredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterScreen;
