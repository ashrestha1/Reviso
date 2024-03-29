import React, { useState, useEffect } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ImageBackground,
  Modal,
  TextInput,
  useWindowDimensions,
  Animated,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import QuestionSet from '../components/QuestionSet';
import ActionButton from 'react-native-action-button';
import CreateQuestionSetModal from '../components/CreateQuestionSetModal';
//Import Icon for the ActionButton
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '../Redux2/Actions/account';
import { getQuestionsTeacher } from '../Redux2/Actions/questions';

const { width } = Dimensions.get('screen');
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';
import { getQuestionsStudent } from '../Redux2/Actions/studentQuestions';

const Tab = createMaterialTopTabNavigator();

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [
    createQuestionSetModalVisible,
    setCreateQuestionSetModalVisible,
  ] = useState(false);
  useEffect(() => {
    dispatch(getAccount(route.params.token));
    dispatch(getQuestionsTeacher(route.params.token));
    dispatch(getQuestionsStudent(route.params.token));
  }, []);

  const account = useSelector((state) => state.account);

  questions = useSelector((state) => state.questions.questionsArray);

  questionsForStudent = useSelector(
    (state) => state.questionsStudent.questionsStudentArray
  );
  const toggleCreateQuestionSetModal = () => {
    createQuestionSetModalVisible
      ? setCreateQuestionSetModalVisible(false)
      : setCreateQuestionSetModalVisible(true);
  };
  const FirstRoute = () => (
    <View style={{ backgroundColor: '#9fc2c3' }}>
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
          Math-tastic Questions for you!
        </Text>

        {account.privileged ? (
          <Block flex>
            {questions.map((data) =>
              data.title.includes('math') ? (
                <QuestionSet
                  disable={account.privileged ? true : false}
                  key={data.id}
                  question={data}
                  token={route.params.token}
                  navigation={navigation}
                  destination="Question"
                />
              ) : null
            )}
            {questions?.length === 0 && <Text>No Questions left </Text>}
          </Block>
        ) : (
          <Block flex>
            {questionsForStudent.map((data) =>
              data.title.includes('math') ? (
                <QuestionSet
                  disable={account.privileged ? true : false}
                  key={data.id}
                  question={data}
                  token={route.params.token}
                  navigation={navigation}
                  destination="Question"
                />
              ) : null
            )}
            {questionsForStudent?.length === 0 && (
              <Text>No Questions left </Text>
            )}
          </Block>
        )}
      </ScrollView>
    </View>
  );

  const SecondRoute = () => (
    <View style={{ backgroundColor: '#9fc2c3' }}>
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
          Your first steps to become a professional coder
        </Text>

        {account.privileged ? (
          <Block flex>
            {questions.map((data) =>
              data.title.includes('computer') ? (
                <QuestionSet
                  disable={account.privileged ? true : false}
                  key={data.id}
                  question={data}
                  token={route.params.token}
                  navigation={navigation}
                  destination="Question"
                />
              ) : null
            )}
            {questions?.length === 0 && <Text>No Questions left </Text>}
          </Block>
        ) : (
          <Block flex>
            {questionsForStudent.map((data) =>
              data.title.includes('computer') ? (
                <QuestionSet
                  disable={account.privileged ? true : false}
                  key={data.id}
                  question={data}
                  token={route.params.token}
                  navigation={navigation}
                  destination="Question"
                />
              ) : null
            )}
            {questionsForStudent?.length === 0 && (
              <Text>No Questions left </Text>
            )}
          </Block>
        )}
      </ScrollView>
    </View>
  );

  const ThirdRoute = () => (
    <View style={{ backgroundColor: '#9fc2c3' }}>
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
          We are the best Science!
        </Text>

        {account.privileged ? (
          <Block flex>
            {questions.map((data) =>
              data.title.includes('physics') ? (
                <QuestionSet
                  disable={account.privileged ? true : false}
                  key={data.id}
                  question={data}
                  token={route.params.token}
                  navigation={navigation}
                  destination="Question"
                />
              ) : null
            )}
            {questions?.length === 0 && <Text>No Questions left </Text>}
          </Block>
        ) : (
          <Block flex>
            {questionsForStudent.map((data) =>
              data.title.includes('physics') ? (
                <QuestionSet
                  disable={account.privileged ? true : false}
                  key={data.id}
                  question={data}
                  token={route.params.token}
                  navigation={navigation}
                  destination="Question"
                />
              ) : null
            )}
            {questionsForStudent?.length === 0 && (
              <Text>No Questions left </Text>
            )}
          </Block>
        )}
      </ScrollView>
    </View>
  );

  return (
    <ImageBackground
      style={{ width: '100%', height: '100%', backgroundColor: '#b7d1d2' }}
    >
      <View
        style={{
          paddingHorizontal: 40,
          marginTop: 25,
          flex: 1,
        }}
      >
        <View
          style={{
            marginTop: 40,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: '#FFF',
              fontWeight: '400',
            }}
          >
            Hello {account.prettyName}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile', { token: route.params.token })
            }
          >
            <Icon name="account-circle" size={33} color="#FFF" />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 15,
            paddingVertical: 10,
            paddingRight: 80,
            lineHeight: 22,
            fontWeight: '400',
            color: '#2e808b',
          }}
        >
          Reviso - Start training your Brain!
        </Text>
        <View
          style={{
            position: 'absolute',
            bottom: 100,
            right: 100,
            backgroundColor: 'red',
            zIndex: 1,
          }}
        >
          {account.privileged == 1 && (
            <ActionButton
              buttonColor="rgba(231,76,60,1)"
              offsetX={0}
              offsetY={0}
              renderIcon={(active) =>
                active ? (
                  <Icon name="menu-open" style={{ fontSize: 20 }} />
                ) : (
                  <Icon name="menu" style={{ fontSize: 20 }} />
                )
              }
            >
              {/*Inner options of the action button*/}
              {/*Icons here
             https://infinitered.github.io/ionicons-version-3-search/
           */}
              <ActionButton.Item
                buttonColor="#9b59b6"
                title="Create a Question Set"
                spaceBetween={-50}
                onPress={toggleCreateQuestionSetModal}
              >
                <Icon name="plus" style={{ fontSize: 20 }} />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="#3498db"
                title="Edit a Question Set"
                spaceBetween={-50}
                onPress={() =>
                  navigation.navigate('QuestionSetList', {
                    token: route.params.token,
                  })
                }
              >
                <Icon name="pencil" style={{ fontSize: 20 }} />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="#1abc9c"
                spaceBetween={-50}
                title="View Your Students"
                onPress={() => {
                  navigation.navigate('StudentScoreList', {
                    token: route.params.token,
                  });
                }}
              >
                <Icon name="account-group" style={{ fontSize: 20 }} />
              </ActionButton.Item>
            </ActionButton>
          )}
        </View>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            activeTintColor: 'white',
            inactiveTintColor: '#778899',
            indicatorStyle: { backgroundColor: 'white' },
            style: { backgroundColor: '#f7b640', marginTop: '5%', zIndex: 0 },
          }}
          style={{
            marginHorizontal: '-13%',
          }}
        >
          <Tab.Screen name="Math" component={FirstRoute} />
          <Tab.Screen name="Computer" component={SecondRoute} />
          <Tab.Screen name="Physics" component={ThirdRoute} />
        </Tab.Navigator>
        <Modal
          animationType="slide"
          transparent={true}
          visible={createQuestionSetModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <CreateQuestionSetModal
            toggleCreateQuestionSetModal={toggleCreateQuestionSetModal}
            token={route.params.token}
            navigation={navigation}
          />
        </Modal>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // tabBar: {
  //   backgroundColor: 'red',
  //   flexDirection: 'row',
  // },
  // tabItem: {
  //   alignItems: 'center',
  //   padding: 16,
  // },
  home: {
    width: width,
  },

  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    paddingHorizontal: '5%',

    paddingVertical: theme.SIZES.BASE / 2,
  },
});
