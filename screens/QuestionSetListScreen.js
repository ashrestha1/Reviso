import React from 'react';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  View,
  FlatList,
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
          <Icon name="progress-close" size={25} color="#8898AA" />
        </Button>
        <Text color="#8898AA" size={25} style={{ marginTop: '5%' }}>
          <Icon
            name="book-open-page-variant"
            style={[styles.inputIcons, { color: '#9fc2c3' }]}
          />{' '}
          Question Set
        </Text>
      </Block>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                {/* {item.title} */}
                hi
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </Block>
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
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  backButton: {
    marginRight: '10%',

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
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    alignItems: 'center',
  },
});
