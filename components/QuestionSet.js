import React, { useState } from 'react';

import { StyleSheet, Dimensions, Image, Modal } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../components/Button';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios';

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
const QuestionSet = (props) => {
  const { product, horizontal, full, style, priceColor, imageStyle } = props;
  const imageStyles = [
    styles.image,
    full ? styles.fullImage : styles.horizontalImage,
    imageStyle,
  ];
  const token = props.token;

  const navigation = props.navigation;
  const destination = props.destination;
  const disable = props.disable;
  const questionData = props.question;
  const size = 12;
  const padding = 1.5;

  var questionSetReplacedTitle = questionData.title.replace('math', '');
  questionSetReplacedTitle = questionSetReplacedTitle.replace('computer', '');
  questionSetReplacedTitle = questionSetReplacedTitle.replace('physics', '');

  const [questionInfoModalVisible, setQuestionInfoModalVisible] = useState(
    false
  );
  const [questionInfoModalData, setQuestionInfoModalData] = useState({});

  const toggleShowQuestionInfoModal = (questionDataId) => {
    if (questionDataId == 'close') {
      setQuestionInfoModalVisible(!questionInfoModalVisible);
      return;
    }

    console.log(props, questionDataId);

    axios
      .get(
        `http://18.166.28.128/score/mine?token=${token}&questionSetId=${questionDataId}`
      )
      .then((res) => {
        setQuestionInfoModalData(res);
        console.log('setquestionInfoData', res);
      })
      .then(() => {
        setQuestionInfoModalVisible(!questionInfoModalVisible);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  return (
    <Block card flex style={[styles.product, styles.shadow, style]}>
      <TouchableOpacity
        disabled={disable}
        onPress={() => toggleShowQuestionInfoModal(questionData.id)}
        style={{ height: '100%' }}
      >
        <Block
          style={[
            styles.productDescription,
            { padding: theme.SIZES.BASE / padding },
          ]}
          row
          space="between"
        >
          <Text size={size} style={styles.productTitle}>
            {questionSetReplacedTitle}
          </Text>
          <Text size={size} muted={!priceColor} color={priceColor}>
            {questionData.graded ? questionData.deadline : 'Ungraded'}
          </Text>
        </Block>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={questionInfoModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <>
          <Block flex={0.5} safe middle>
            <Block style={styles.registerContainer}>
              <Block middle style={styles.socialConnect}>
                <Block row middle style>
                  <Text color="#8898AA" size={25} style={{ marginTop: '5%' }}>
                    Score:
                  </Text>
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
                      {questionInfoModalData.id}
                    </Text>
                  </Button>
                </Block>
              </Block>
              <Block flex>
                <Block flex center>
                  <>
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
                          Submitted on: {questionInfoModalData.submitted}
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
                          Percentage: {questionInfoModalData.percentage}
                        </Text>
                      </Button>
                    </Block>
                  </>

                  <Block middle row>
                    <Button
                      style={styles.resetButton}
                      color="default"
                      onPress={() => toggleShowQuestionInfoModal('close')}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        BACK
                      </Text>
                    </Button>
                    <Button
                      style={styles.resetButton}
                      color="default"
                      onPress={() => {
                        setQuestionInfoModalVisible(false);
                        navigation.navigate(destination);
                      }}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        ENTER
                      </Text>
                    </Button>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </>
      </Modal>
    </Block>
  );
};

export default QuestionSet;

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
  },
  productTitle: {
    paddingBottom: 6,
  },

  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    width: 'auto',
  },
  fullImage: {
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
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
