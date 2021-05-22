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
import { Shake } from 'react-native-motion';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { updateQuestion, deleteQuestion } from '../Redux2/Actions/questions';
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
    GREEN: '#4ead69',
  },
};

const { width, height } = Dimensions.get('screen');

const ViewQuestionSetModal = (props) => {
  const questionData = props.questionData;
  const questionSetData = props.questionSetData;

  const creating = props.creating || false;

  var oldDate = 'Date';
  var oldGraded = 0;
  if (creating) {
    oldGraded = questionSetData.graded;
    oldDate = questionSetData.deadline;
  } else {
    oldGraded = questionData.graded;
    oldDate = new Date(questionData.deadline).toLocaleDateString('fr-CA');
  }

  const [deadline, setDeadline] = useState(oldDate);

  const [timeLimit, setTimelimit] = useState(new Date());
  const [graded, setGraded] = useState(oldGraded);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const gradedPressed = () => {
    setGraded(!graded);
  };

  const startAnimation = () => {
    setValue(value + 1);
  };

  const modifyPressed = () => {
    const gradeChangeToUngraded = graded != oldGraded;

    var data;

    if (gradeChangeToUngraded) {
      data = JSON.stringify({
        token: props.token,
        id: questionData.id,
        changeToUngraded: gradeChangeToUngraded,
      });
    } else {
      data = JSON.stringify({
        token: props.token,
        id: questionData.id,
        changeToUngraded: gradeChangeToUngraded,
        newDeadline: deadline,
      });
    }

    dispatch(updateQuestion(data, props.token));
  };

  const deletePressed = () => {
    const data = JSON.stringify({
      token: props.token,
      id: questionData.id,
    });
    dispatch(deleteQuestion(data, props.token));
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timerIconColor, setTimerIconColor] = useState(argonTheme.COLORS.GREEN);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    currentDate.toLocaleDateString('fr-CA');
    setDate(currentDate);
    setDeadline(currentDate.toLocaleDateString('fr-CA'));
  };

  const onChangeTime = (event, selectedTimer) => {
    const currentTime = selectedTimer || timeLimit;
    setShow(Platform.OS === 'ios');
    setTimelimit(currentTime);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const closeModal = () => {
    setTimerIconColor(argonTheme.COLORS.GREEN);
    setShowTimer(false);
    setShow(false);
  };

  if (creating) {
    var questionSetReplacedTitle = questionSetData.questionSet.title.replace(
      'math',
      ''
    );
  } else {
    var questionSetReplacedTitle = questionData.title.replace('math', '');
  }

  questionSetReplacedTitle = questionSetReplacedTitle.replace('computer', '');
  questionSetReplacedTitle = questionSetReplacedTitle.replace('physics', '');

  return (
    <>
      <Shake
        value={value}
        type="timing"
        useNativeDriver={true}
        style={StyleSheet.absoluteFill}
      >
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <Block flex={0.5} safe middle>
            <Block style={styles.registerContainer}>
              <Block middle style={styles.socialConnect}>
                <Block row middle style>
                  <Text color="#8898AA" size={25} style={{ marginTop: '5%' }}>
                    Question Set:
                  </Text>
                  {!creating && (
                    <TouchableOpacity>
                      <Icon
                        //   size={16}
                        //   color={argonTheme.COLORS.ICON}
                        name="timer-outline"
                        color={timerIconColor}
                        //   family="ArgonExtra"
                        style={{
                          fontSize: 45,
                          marginLeft: 10,
                        }}
                      />
                    </TouchableOpacity>
                  )}
                </Block>

                <Block width={width * 0.8}>
                  <Button style={styles.labelStyle}>
                    <Text
                      style={{ fontWeight: '500' }}
                      size={16}
                      color={argonTheme.COLORS.BLACK}
                    >
                      <Icon
                        //   size={16}
                        //   color={argonTheme.COLORS.ICON}
                        name="book-open-page-variant"
                        //   family="ArgonExtra"
                        style={[styles.inputIcons, { color: '#9fc2c3' }]}
                      />{' '}
                      {questionSetReplacedTitle}
                    </Text>
                  </Button>
                </Block>
              </Block>
              <Block flex>
                <Block flex center>
                  {creating && (
                    <>
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Button style={styles.labelStyle}>
                          <Text
                            style={{ fontWeight: '500' }}
                            size={16}
                            color={argonTheme.COLORS.BLACK}
                          >
                            <Icon
                              //   size={16}
                              //   color={argonTheme.COLORS.ICON}
                              name="head-question-outline"
                              //   family="ArgonExtra"
                              style={[styles.inputIcons, { color: '#f7b640' }]}
                            />{' '}
                            {questionData.question}
                          </Text>
                        </Button>
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                        <Button style={styles.labelStyle}>
                          <Text
                            style={{ fontWeight: '500' }}
                            size={16}
                            color={argonTheme.COLORS.GREEN}
                          >
                            <Icon
                              //   size={16}
                              //   color={argonTheme.COLORS.ICON}
                              name="check-circle-outline"
                              //   family="ArgonExtra"
                              style={[styles.inputIcons, { color: 'green' }]}
                            />{' '}
                            {questionData.answers[0]}
                          </Text>
                        </Button>
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                        <Button style={styles.labelStyle}>
                          <Text
                            style={{ fontWeight: '500' }}
                            size={16}
                            color={argonTheme.COLORS.ERROR}
                          >
                            <Icon
                              //   size={16}
                              //   color={argonTheme.COLORS.ICON}
                              name="close-circle-outline"
                              //   family="ArgonExtra"
                              style={[styles.inputIcons, { color: 'red' }]}
                            />{' '}
                            {questionData.answers[1]}
                          </Text>
                        </Button>
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                        <Button style={styles.labelStyle}>
                          <Text
                            style={{ fontWeight: '500' }}
                            size={16}
                            color={argonTheme.COLORS.ERROR}
                          >
                            <Icon
                              //   size={16}
                              //   color={argonTheme.COLORS.ICON}
                              name="close-circle-outline"
                              //   family="ArgonExtra"
                              style={[styles.inputIcons, { color: 'red' }]}
                            />{' '}
                            {questionData.answers[2]}
                          </Text>
                        </Button>
                      </Block>
                      <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                        <Button style={styles.labelStyle}>
                          <Text
                            style={{ fontWeight: '500' }}
                            size={16}
                            color={argonTheme.COLORS.ERROR}
                          >
                            <Icon
                              //   size={16}
                              //   color={argonTheme.COLORS.ICON}
                              name="close-circle-outline"
                              //   family="ArgonExtra"
                              style={[styles.inputIcons, { color: 'red' }]}
                            />{' '}
                            {questionData.answers[3]}
                          </Text>
                        </Button>
                      </Block>
                    </>
                  )}

                  {!creating && (
                    <Block middle row>
                      <Button
                        disabled={!graded}
                        color={graded ? 'primary' : 'muted'}
                        style={styles.resetButton}
                        onPress={showDatepicker}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          {deadline}
                        </Text>
                      </Button>

                      <Button
                        disabled={!oldGraded}
                        color={graded ? 'success' : 'muted'}
                        style={styles.resetButton}
                        onPress={gradedPressed}
                      >
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          GRADED
                        </Text>
                      </Button>
                    </Block>
                  )}

                  <Block row space="evenly">
                    <Button
                      color="primary"
                      style={styles.createButton}
                      onPress={props.closeViewQuestionSetModal}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        {creating ? 'BACK' : 'CANCEL'}
                      </Text>
                    </Button>
                    {!creating && (
                      <>
                        <Button
                          onPress={modifyPressed}
                          disabled={oldDate == deadline && oldGraded == graded}
                          color={
                            oldDate == deadline && oldGraded == graded
                              ? 'muted'
                              : 'primary'
                          }
                          style={styles.createButton}
                        >
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            MODIFY
                          </Text>
                        </Button>
                      </>
                    )}
                  </Block>
                  {!creating && (
                    <Button
                      onPress={() => {
                        deletePressed();
                        props.closeViewQuestionSetModal();
                      }}
                      color="primary"
                      style={styles.createButton}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        DELETE
                      </Text>
                    </Button>
                  )}
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
                minimumDate={new Date()}
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
                  onPress={closeModal}
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
                value={timeLimit}
                mode={'countdown'}
                display="default"
                onChange={onChangeTime}
                style={{ marginBottom: 10 }}
              />
              <View style={{ alignItems: 'center' }}>
                <Button
                  color="primary"
                  style={styles.createButton}
                  onPress={closeModal}
                >
                  <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                    CONFIRM
                  </Text>
                </Button>
              </View>
            </View>
          </Modal>
        )}
      </Shake>
    </>
  );
};

export default ViewQuestionSetModal;
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
  labelStyle: {
    width: width * 0.75,
    paddingLeft: 10,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
});
