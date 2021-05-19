import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  View,
  TouchableOpacity,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from './Button';
import Input from './input';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
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

const CreateQuestionSetModal = (props) => {
  const [deadline, setDeadline] = useState('DATE');
  const [questionSetTitle, setQuestionSetTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer1, setWrongAnswer1] = useState('');
  const [wrongAnswer2, setWrongAnswer2] = useState('');
  const [wrongAnswer3, setWrongAnswer3] = useState('');
  const [description, setDescription] = useState('');
  const [timeLimit, setTimelimit] = useState('');

  const [isPrimary, setIsPrimary] = useState('muted');
  const gradedPressed = () => {
    isPrimary == 'muted'
      ? setIsPrimary('INPUT_SUCCESS')
      : setIsPrimary('muted');
  };
  const createPressed = () => {
    const data = JSON.stringify({
      token: props.token,
      graded: action.payload.graded,
      deadline: action.payload.deadline,
      timeLimit: action.payload.timeLimit,
      questionSet: action.payload.questionSet,
    });
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDeadline(currentDate.toLocaleDateString());
  };

  const onChangeTime = (event, selectedTimer) => {
    console.log(new Date(selectedTimer).getMinutes());
    console.log(new Date(selectedTimer).getHours());
    const currentTime = selectedTimer || date;
    setShow(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const timerModalToggle = () => {
    setShowTimer(!showTimer);
  };

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <Block flex={0.5} safe middle>
          <Block style={styles.registerContainer}>
            <Block middle style={styles.socialConnect}>
              <Block row middle>
                <Text color="#8898AA" size={20} style={{ marginTop: '5%' }}>
                  Question Set
                </Text>
                <TouchableOpacity onPress={timerModalToggle}>
                  <Icon
                    //   size={16}
                    //   color={argonTheme.COLORS.ICON}
                    name="timer"
                    //   family="ArgonExtra"
                    style={{
                      color: '#9fc2c3',
                      fontSize: 30,
                      marginTop: '3%',
                      marginLeft: 10,
                    }}
                  />
                </TouchableOpacity>
              </Block>

              <Block width={width * 0.8}>
                <Input
                  borderless
                  onChangeText={(val) => setQuestionSetTitle(val)}
                  placeholder="Title"
                  iconContent={
                    <Icon
                      //   size={16}
                      //   color={argonTheme.COLORS.ICON}
                      name="book-open-page-variant"
                      //   family="ArgonExtra"
                      style={[styles.inputIcons, { color: '#9fc2c3' }]}
                    />
                  }
                />
              </Block>
            </Block>
            <Block flex>
              <Block flex center>
                <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                  <Input
                    borderless
                    placeholder="Question"
                    onChangeText={(val) => setQuestion(val)}
                    iconContent={
                      <Icon
                        //   size={16}
                        //   color={argonTheme.COLORS.ICON}
                        name="head-question-outline"
                        //   family="ArgonExtra"
                        //f7b640
                        style={[styles.inputIcons, { color: '#f7b640' }]}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                  <Input
                    borderless
                    onChangeText={(val) => setCorrectAnswer(val)}
                    placeholder="Correct Answer"
                    iconContent={
                      <Icon
                        //   size={16}
                        //   color={argonTheme.COLORS.ICON}
                        name="check-circle-outline"
                        //   family="ArgonExtra"
                        style={[styles.inputIcons, { color: 'green' }]}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                  <Input
                    borderless
                    onChangeText={(val) => setWrongAnswer1(val)}
                    placeholder="Wrong Answer"
                    iconContent={
                      <Icon
                        //   size={16}
                        //   color={argonTheme.COLORS.ICON}
                        name="close-circle-outline"
                        //   family="ArgonExtra"
                        style={[styles.inputIcons, { color: 'red' }]}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                  <Input
                    borderless
                    onChangeText={(val) => setWrongAnswer2(val)}
                    placeholder="Wrong Answer"
                    iconContent={
                      <Icon
                        //   size={16}
                        //   color={argonTheme.COLORS.ICON}
                        name="close-circle-outline"
                        //   family="ArgonExtra"
                        style={[styles.inputIcons, { color: 'red' }]}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                  <Input
                    borderless
                    onChangeText={(val) => setWrongAnswer3(val)}
                    placeholder="Wrong Answer"
                    iconContent={
                      <Icon
                        //   size={16}
                        //   color={argonTheme.COLORS.ICON}
                        name="close-circle-outline"
                        //   family="ArgonExtra"
                        style={[styles.inputIcons, { color: 'red' }]}
                      />
                    }
                  />
                </Block>

                <Block middle row>
                  <Button
                    color="primary"
                    style={styles.resetButton}
                    onPress={showDatepicker}
                  >
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      {deadline}
                    </Text>
                  </Button>

                  <Button
                    color={isPrimary}
                    style={styles.resetButton}
                    onPress={gradedPressed}
                  >
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      GRADED
                    </Text>
                  </Button>
                </Block>

                <Block row space="evenly">
                  <Button
                    color="primary"
                    style={styles.createButton}
                    onPress={props.toggleCreateQuestionSetModal}
                  >
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      CANCEL
                    </Text>
                  </Button>
                  <Button color="primary" style={styles.createButton}>
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      CREATE
                    </Text>
                  </Button>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>

      {show && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={styles.modal}>
            <DateTimePicker
              maximumDate={new Date(2021, 11, 31)}
              minimumDate={new Date(1950, 0, 1)}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
              style={{ marginBottom: 10 }}
            />
            <View style={{ alignItems: 'center' }}>
              <Button
                color="primary"
                style={styles.createButton}
                onPress={() => setShow(false)}
              >
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  CONFIRM
                </Text>
              </Button>
            </View>
          </View>
        </Modal>
      )}

      {showTimer && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showTimer}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={styles.modal}>
            <DateTimePicker
              testID="dateTimePicker"
              value={time}
              mode={'countdown'}
              display="default"
              onChange={onChangeTime}
              style={{ marginBottom: 10 }}
            />
            <View style={{ alignItems: 'center' }}>
              <Button
                color="primary"
                style={styles.createButton}
                onPress={() => setShowTimer(false)}
              >
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  CONFIRM
                </Text>
              </Button>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default CreateQuestionSetModal;
const styles = StyleSheet.create({
  registerContainer: {
    marginTop: '86%',
    width: width * 0.9,
    height: height * 0.9,
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
  modal: {
    flex: 1,
    margin: 160,
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
  socialConnect: {
    paddingVertical: '4%',
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
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
    fontSize: 25,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width / 3,
    marginTop: 10,
  },
  resetButton: {
    width: width * 0.35,
    marginTop: 15,
  },
});
