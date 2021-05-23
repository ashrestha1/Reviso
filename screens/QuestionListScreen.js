import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { BlurView } from 'expo-blur';
import { useDispatch, useSelector } from 'react-redux';
import ViewQuestionSetModal from '../components/ViewQuestionSetModal';
import AddQuestionSetModal from '../components/AddQuestionSetModal';
import { createQuestions } from '../Redux2/Actions/questions';
import { getQuestionsTeacher } from '../Redux2/Actions/questions';

import Button from '../components/Button';

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

export default ({ navigation, route }) => {
  var data = {
    token: '',
    graded: false,
    deadline: '',
    timeLimit: 0,
    questionSet: {
      title: '',
      description: '',
      problems: [
        {
          question: '',
          answers: ['', '', '', ''],
        },
      ],
    },
  };
  const dispatch = useDispatch();
  data = route.params.data;
  const create = route.params.create;

  const [problems, setProblems] = useState(data.questionSet.problems);

  const addProblem = (newProblem) => {
    data.questionSet.problems = [...data.questionSet.problems, newProblem];
  };

  const [
    viewQuestionSetModalVisible,
    setViewQuestionSetModalVisible,
  ] = useState(false);

  const [viewQuestionSetModalData, setViewQuestionSetModalData] = useState([]);

  const openViewQuestionSetModal = (item) => {
    setViewQuestionSetModalData(item);
    setViewQuestionSetModalVisible(true);
  };

  const closeViewQuestionSetModal = () => {
    setViewQuestionSetModalVisible(false);
    setViewQuestionSetModalData([]);
  };

  const [addQuestionSetModalVisible, setAddQuestionSetModalVisible] = useState(
    false
  );

  const toggleAddQuestionSetModal = () => {
    addQuestionSetModalVisible
      ? setAddQuestionSetModalVisible(false)
      : setAddQuestionSetModalVisible(true);
  };

  const createSet = () => {
    const createData = JSON.stringify(data);

    dispatch(createQuestions(data));
    // dispatch(getQuestionsTeacher(data.token));
    navigation.navigate('Home');
  };

  var questionSetReplacedTitle = data.questionSet.title.replace('math', '');
  questionSetReplacedTitle = questionSetReplacedTitle.replace('computer', '');
  questionSetReplacedTitle = questionSetReplacedTitle.replace('physics', '');

  return (
    <>
      <Block style={styles.registerContainer}>
        <Block style={styles.socialConnect} row>
          <Text color="#8898AA" size={25} style={{ marginTop: '5%' }}>
            <Icon
              name="book-open-page-variant"
              style={[styles.inputIcons, { color: '#9fc2c3' }]}
            />{' '}
            {questionSetReplacedTitle}
          </Text>
          {create && (
            <Button
              style={styles.backButton}
              color="#9fc2c3"
              onPress={toggleAddQuestionSetModal}
            >
              <Icon name="plus" size={30} color="#8898AA" />
            </Button>
          )}
        </Block>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data.questionSet.problems}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() => openViewQuestionSetModal(item)}
            >
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                    {item.question}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </Block>

      <Modal
        animationType="slide"
        transparent={true}
        visible={addQuestionSetModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <BlurView
          intensity={90}
          style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
        >
          <AddQuestionSetModal
            addProblem={addProblem}
            toggleAddQuestionSetModal={toggleAddQuestionSetModal}
            title={questionSetReplacedTitle}
          />
        </BlurView>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={viewQuestionSetModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <BlurView
          intensity={90}
          style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
        >
          <ViewQuestionSetModal
            closeViewQuestionSetModal={closeViewQuestionSetModal}
            questionData={viewQuestionSetModalData}
            questionSetData={data}
            creating={create}
            // token={props.token}
          />
        </BlurView>
      </Modal>

      {create && (
        <View
          style={{
            position: 'absolute',
            bottom: 50,
            zIndex: 1,
            left: '50%',
          }}
        >
          <Button onPress={createSet} large center color="default">
            CREATE Your Set!
          </Button>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    // width: width * 0.9,
    height: height,

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
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: '6%',
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
    fontSize: 30,
  },
  nonBlurredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  backButton: {
    marginRight: '10%',
    marginTop: '5%',
    width: '14%',
  },
  products: {
    paddingHorizontal: '5%',
    paddingVertical: theme.SIZES.BASE / 2,
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 8,
    paddingVertical: 2,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    alignItems: 'center',
  },
});
