import React from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';

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
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <Block flex={0.5} safe middle>
        <Block style={styles.registerContainer}>
          <Block middle style={styles.socialConnect}>
            <Text color="#8898AA" size={20} style={{ marginTop: '5%' }}>
              Question Set
            </Text>
            <Block width={width * 0.8}>
              <Input
                borderless
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
              <Block width={width * 0.8} style={{ marginBottom: 12 }}>
                <Input
                  borderless
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
});
