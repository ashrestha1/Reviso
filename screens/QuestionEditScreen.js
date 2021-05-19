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

export default ({ navigation, route }) => {
  return (
    <Block flex={0.5} safe middle>
      <Block style={styles.registerContainer}>
        <Block style={styles.socialConnect}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('QuestionSetList');
            }}
          >
            <Icon name="progress-close" size={25} color="#8898AA" />
          </TouchableOpacity>
          <View style={{ alignSelf: 'center' }}>
            <View style={{ alignSelf: 'center' }}>
              <Text color="#8898AA" size={20} style={{ marginTop: '5%' }}>
                Question Set
              </Text>
            </View>

            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
              <Button style={styles.labelStyle}>
                <Icon
                  //   size={16}
                  //   color={argonTheme.COLORS.ICON}
                  name="close-circle-outline"
                  //   family="ArgonExtra"
                  style={[styles.inputIcons, { color: 'red' }]}
                />
                <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                  Title
                </Text>
              </Button>
            </Block>
          </View>
        </Block>
        <Block flex>
          <Block flex center>
            <Block width={width * 0.8} style={{ marginbottom: 5 }}>
              <Button style={styles.labelStyle}>
                <Icon
                  //   size={16}
                  //   color={argonTheme.COLORS.ICON}
                  name="head-question-outline"
                  //   family="ArgonExtra"
                  //f7b640
                  style={[styles.inputIcons, { color: '#f7b640' }]}
                />
                <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                  Question Title
                </Text>
              </Button>
            </Block>
            <Block width={width * 0.8} style={{ marginbottom: 5 }}>
              <Button style={styles.labelStyle}>
                <Icon
                  //   size={16}
                  //   color={argonTheme.COLORS.ICON}
                  name="check-circle-outline"
                  //   family="ArgonExtra"
                  style={[styles.inputIcons, { color: 'green' }]}
                />
                <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                  Correct Answer
                </Text>
              </Button>
            </Block>
            <Block width={width * 0.8} style={{ marginbottom: 5 }}>
              <Button style={styles.labelStyle}>
                <Icon
                  //   size={16}
                  //   color={argonTheme.COLORS.ICON}
                  name="close-circle-outline"
                  //   family="ArgonExtra"
                  style={[styles.inputIcons, { color: 'red' }]}
                />
                <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                  Wrong Answer
                </Text>
              </Button>
            </Block>
            <Block width={width * 0.8} style={{ marginbottom: 5 }}>
              <Button style={styles.labelStyle}>
                <Icon
                  //   size={16}
                  //   color={argonTheme.COLORS.ICON}
                  name="close-circle-outline"
                  //   family="ArgonExtra"
                  style={[styles.inputIcons, { color: 'red' }]}
                />
                <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                  Wrong Answer
                </Text>
              </Button>
            </Block>
            <Block width={width * 0.8} style={{ marginbottom: 5 }}>
              <Button style={styles.labelStyle}>
                <Icon
                  //   size={16}
                  //   color={argonTheme.COLORS.ICON}
                  name="close-circle-outline"
                  //   family="ArgonExtra"
                  style={[styles.inputIcons, { color: 'red' }]}
                />
                <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                  Wrong Answer
                </Text>
              </Button>
            </Block>

            <Block style={{ marginbottom: 0 }} row space="evenly">
              <Button style={styles.labelStyleV2}>
                <Icon
                  //   size={16}
                  //   color={argonTheme.COLORS.ICON}
                  name="close-circle-outline"
                  //   family="ArgonExtra"
                  style={[styles.inputIcons, { color: 'red' }]}
                />
                <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                  12/28/2042
                </Text>
              </Button>

              <Button style={styles.labelStyleV2}>
                <Icon
                  //   size={16}
                  //   color={argonTheme.COLORS.ICON}
                  name="close-circle-outline"
                  //   family="ArgonExtra"
                  style={[styles.inputIcons, { color: 'red' }]}
                />
                <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                  Graded
                </Text>
              </Button>
            </Block>

            <Block row space="evenly">
              <Button color="primary" style={styles.createButton}>
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  DELETE
                </Text>
              </Button>
              <Button color="primary" style={styles.createButton}>
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  UPDATE
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

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
  labelStyle: {
    flexDirection: 'row',
    width: width * 0.75,
    backgroundColor: 'white',
  },
  labelStyleV2: {
    flexDirection: 'row',
    width: width * 0.4,
    backgroundColor: 'white',
  },
});
