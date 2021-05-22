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
import { createQuestions } from '../Redux2/Actions/questions';
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

const CreateQuestionSetModal = (props) => {
  const [deadline, setDeadline] = useState('DATE');
  const [questionSetTitle, setQuestionSetTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer1, setWrongAnswer1] = useState('');
  const [wrongAnswer2, setWrongAnswer2] = useState('');
  const [wrongAnswer3, setWrongAnswer3] = useState('');
  const [description, setDescription] = useState('');
  const [timeLimit, setTimelimit] = useState(new Date());
  const [graded, setGraded] = useState(false);
  const [value, setValue] = useState(0);

  const [math, setMath] = useState(false);
  const [computer, setComputer] = useState(false);
  const [physics, setPhysics] = useState(false);

  const mathPressed = () => {
    setMath(!math);
  };
  const computerPressed = () => {
    setComputer(!computer);
  };
  const physicsPressed = () => {
    setPhysics(!physics);
  };

  const dispatch = useDispatch();

  const gradedPressed = () => {
    setGraded(!graded);
  };

  const startAnimation = () => {
    setValue(value + 1);
  };

  const createPressed = () => {
    if (
      questionSetTitle == '' ||
      question == '' ||
      correctAnswer == '' ||
      wrongAnswer1 == '' ||
      wrongAnswer2 == '' ||
      wrongAnswer3 == '' ||
      timeLimit == new Date() ||
      (!math && !computer && !physics)
    ) {
      console.log('hi');
      console.log(timeLimit);
      startAnimation();
      return;
    }

    var category = '';
    if (math) category += 'math';
    if (computer) category += 'computer';
    if (physics) category += 'physics';

    var minute = new Date(timeLimit).getMinutes();
    var hour = new Date(timeLimit).getHours();
    var totalSecond = minute * 60 + hour * 3600;

    // const data = JSON.stringify({
    //   token: props.token,
    //   graded: graded,
    //   deadline: deadline,
    //   timeLimit: totalSecond,
    //   questionSet: {
    //     title: questionSetTitle,
    //     description: category,
    //     problems: [
    //       {
    //         question: question,
    //         answers: [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3],
    //       },
    //     ],
    //   },
    // });
    const newtitle = questionSetTitle + category;
    console.log(newtitle);
    const data = {
      token: props.token,
      graded: graded,
      deadline: deadline,
      timeLimit: totalSecond,
      questionSet: {
        title: newtitle,
        description: category,
        problems: [
          {
            question: question,
            answers: [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3],
          },
        ],
      },
    };

    props.navigation.navigate('QuestionList', { data: data, create: true });
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timerIconColor, setTimerIconColor] = useState('#9fc2c3');

  const onChange = (event, selectedDate) => {
    console.log(selectedDate);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDeadline(currentDate.toLocaleDateString());
  };

  const onChangeTime = (event, selectedTimer) => {
    console.log(selectedTimer);
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

  const timerModalToggle = () => {
    setShowTimer(true);
  };
  const closeModal = () => {
    setShowTimer(false);
    setShow(false);
  };

  const closeTimerModal = () => {
    setTimerIconColor(argonTheme.COLORS.GREEN);
    setShowTimer(false);
    setShow(false);
  };

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
                <Block row middle>
                  <Text color="#8898AA" size={20} style={{ marginTop: '5%' }}>
                    Question Set
                  </Text>
                  <TouchableOpacity onPress={timerModalToggle}>
                    <Icon
                      //   size={16}
                      //   color={argonTheme.COLORS.ICON}
                      name="timer-outline"
                      //   family="ArgonExtra"
                      color={timerIconColor}
                      style={{
                        fontSize: 45,

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
                  <Block width={width * 0.8} style={{ marginBottom: 5 }}>
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
                  <Block row>
                    <Button
                      onPress={mathPressed}
                      small
                      center
                      color={math ? 'success' : 'muted'}
                    >
                      Math
                    </Button>
                    <Button
                      onPress={computerPressed}
                      small
                      center
                      color={computer ? 'success' : 'muted'}
                    >
                      Computer
                    </Button>
                    <Button
                      onPress={physicsPressed}
                      small
                      center
                      color={physics ? 'success' : 'muted'}
                    >
                      Physics
                    </Button>
                  </Block>
                  <Block middle row>
                    <Button
                      small
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
                      color={graded ? 'success' : 'muted'}
                      style={styles.resetButton}
                      onPress={gradedPressed}
                      small
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        GRADED
                      </Text>
                    </Button>
                  </Block>

                  <Block row space="evenly">
                    <Button
                      small
                      color="primary"
                      style={styles.createButton}
                      onPress={props.toggleCreateQuestionSetModal}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        CANCEL
                      </Text>
                    </Button>
                    <Button
                      small
                      onPress={() => {
                        props.toggleCreateQuestionSetModal();
                        createPressed();
                      }}
                      color={
                        questionSetTitle == '' ||
                        question == '' ||
                        correctAnswer == '' ||
                        wrongAnswer1 == '' ||
                        wrongAnswer2 == '' ||
                        wrongAnswer3 == '' ||
                        timeLimit == new Date() ||
                        (!math && !computer && !physics) ||
                        (graded && deadline == 'DATE')
                          ? 'muted'
                          : 'primary'
                      }
                      disabled={
                        questionSetTitle == '' ||
                        question == '' ||
                        correctAnswer == '' ||
                        wrongAnswer1 == '' ||
                        wrongAnswer2 == '' ||
                        wrongAnswer3 == '' ||
                        timeLimit == new Date() ||
                        (!math && !computer && !physics) ||
                        (graded && deadline == 'DATE')
                      }
                      style={styles.createButton}
                    >
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
                  onPress={closeTimerModal}
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
    paddingVertical: '3%',
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
