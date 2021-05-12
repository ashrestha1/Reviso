import React from 'react';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import { Block, Checkbox, Text, theme } from 'galio-framework';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import QuestionSet from '../components/QuestionSet';

import Button from '../components/Button';
import Input from '../components/input';

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

export default ({ navigation }) => {
  return (
    <Block style={styles.registerContainer}>
      <Block style={styles.socialConnect} row>
        <Button
          style={styles.backButton}
          color="#9fc2c3"
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Icon
            name="book-open-page-variant"
            style={[styles.inputIcons, { color: '#9fc2c3' }]}
          />
        </Button>
        <Text color="#8898AA" size={25} style={{ marginTop: '5%' }}>
          <Icon
            name="book-open-page-variant"
            style={[styles.inputIcons, { color: '#9fc2c3' }]}
          />{' '}
          Question Set
        </Text>
      </Block>

      <View style={{ backgroundColor: 'red', height: height }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.products}
        >
          <Text
            style={{
              fontWeight: '400',
              color: '#FFFFFF',
              fontSize: 17,
            }}
          >
            Reccomended
          </Text>
          <Block flex>
            <QuestionSet
              product={{ title: '1' }}
              navigation={navigation}
              destination="Question"
            />
            <Block flex row>
              <QuestionSet
                product={{ title: '1' }}
                navigation={navigation}
                destination="Question"
                small={true}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <QuestionSet
                product={{ title: '1' }}
                navigation={navigation}
                small={true}
                destination="Question"
              />
            </Block>
            <QuestionSet
              product={{ title: '1' }}
              navigation={navigation}
              destination="Question"
            />
            <Text
              style={{
                fontWeight: '400',
                color: '#FFFFFF',
                fontSize: 17,
              }}
            >
              New
            </Text>
            <QuestionSet
              product={{ title: '1' }}
              navigation={navigation}
              prevScreen="homeScreen"
              destination="Question"
            />
          </Block>
        </ScrollView>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    // width: width * 0.9,
    height: height,
    backgroundColor: 'blue',
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
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  backButton: {
    marginRight: '15%',
    marginBottom: '-2%',

    width: '14%',
  },
  products: {
    paddingHorizontal: '5%',
    paddingVertical: theme.SIZES.BASE / 2,
  },
});
