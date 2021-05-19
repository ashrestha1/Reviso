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
  FlatList,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { BlurView } from 'expo-blur';

import Button from '../components/Button';
import Input from '../components/input';
import { Shake } from 'react-native-motion';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
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

export default ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [privileged, setPrivileged] = useState(false);

  const [resetModal, setResetModal] = useState(false);
  const [studentModal, setStudentModal] = useState(false);
  const [student, setStudent] = useState(false);
  const [value, setValue] = useState(0);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorCreate, setErrorCreate] = useState('false');

  const resetPassword = () => {
    setErrorCreate(true);
    startAnimation();
    setTimeout(function () {
      setErrorCreate(false);
    }, 3000);
  };

  const startAnimation = () => {
    setValue(value + 1);
  };

  const account = useSelector((state) => state.account);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const logoutPressed = () => {
    const data = JSON.stringify({
      prettyName: name,
      username: username,
      password: password,
      privileged: privileged,
      masterPassword: masterPassword,
    });

    axios
      .post('http://18.162.200.79/signup', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
        navigation.navigate('Login');
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
                      disabled={true}
                      style={{
                        ...styles.socialButtons,
                        marginRight: 30,
                        backgroundColor: !account.privileged
                          ? '#f7b640'
                          : '#FFF',
                      }}
                      onPress={() => {
                        setStudent(true);
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
                      disabled={true}
                      style={{
                        ...styles.teacherButton,
                        backgroundColor: account.privileged
                          ? '#f7b640'
                          : '#FFF',
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
                  <Block flex={0.3} middle>
                    {privileged != 1 ? (
                      <>
                        <Text color="#8898AA" size={12}>
                          The start of your Journey with Reviso
                        </Text>
                        <Text color="#8898AA" size={10}>
                          Fill in the fields!
                        </Text>
                      </>
                    ) : (
                      <Button
                        style={styles.labelStyle}
                        onPress={() => setStudentModal(true)}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                          View Your Questions
                        </Text>
                      </Button>
                    )}
                  </Block>
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Button style={styles.labelStyle}>
                          <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                            Name
                          </Text>
                        </Button>
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Button style={styles.labelStyle}>
                          <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                            UserName
                          </Text>
                        </Button>
                      </Block>

                      <Block middle row>
                        <Button
                          color="primary"
                          style={styles.resetButton}
                          onPress={() => {
                            setResetModal(true);
                          }}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Reset Password
                          </Text>
                        </Button>
                        <Button
                          color="primary"
                          style={styles.resetButton}
                          onPress={logoutPressed}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Logout
                          </Text>
                        </Button>
                      </Block>
                    </KeyboardAvoidingView>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Home');
                      }}
                      style={{ marginBottom: 20 }}
                    >
                      <Icon name="exit-to-app" size={40} color="#8898AA" />
                    </TouchableOpacity>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Shake>
        </ImageBackground>
      </Block>
      {resetModal && (
        <BlurView
          intensity={90}
          style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={resetModal}
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
                      setResetModal(false);
                    }}
                  >
                    <Icon name="progress-close" size={25} color="#8898AA" />
                  </TouchableOpacity>

                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1, marginTop: 20 }}
                      behavior="padding"
                      enabled
                    >
                      <Block width={width * 0.8}>
                        <Input
                          onChangeText={(val) => setOldPassword(val)}
                          password
                          borderless
                          placeholder="Old Password"
                          iconContent={
                            <Icon
                              size={16}
                              color={argonTheme.COLORS.ICON}
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />
                        <Input
                          onChangeText={(val) => setNewPassword(val)}
                          password
                          borderless
                          placeholder="New Password"
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
                      {errorCreate && (
                        <Block row style={styles.resetCheck}>
                          <Text bold size={12} color={argonTheme.COLORS.ERROR}>
                            Wrong old password
                          </Text>
                        </Block>
                      )}

                      <Block middle>
                        <Button
                          color="primary"
                          style={styles.resetButton}
                          onPress={resetPassword}
                        >
                          <Text bold size={20} color={argonTheme.COLORS.WHITE}>
                            Reset
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

      {studentModal && (
        <BlurView
          intensity={90}
          style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={studentModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            <View style={styles.modal}>
              <TouchableOpacity
                onPress={() => {
                  setStudentModal(false);
                }}
                style={{ marginBottom: 20 }}
              >
                <Icon name="progress-close" size={25} color="#8898AA" />
              </TouchableOpacity>
              <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <View style={styles.card}>
                    <View style={styles.cardContent}>
                      <TouchableOpacity
                        onPress={() => {
                          setStudentModal(false);
                          navigation.navigate('StudentScoreList', {
                            title: 'hi',
                          });
                        }}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
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
  resetButton: {
    width: width * 0.35,
    marginTop: 15,
  },
  labelStyle: {
    width: width * 0.75,
    backgroundColor: 'white',
  },
  modal: {
    flex: 1,
    margin: 200,
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
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    alignItems: 'center',
  },
});
