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

const { width } = Dimensions.get('screen');
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

export default ({ navigation }) => {
  const [
    createQuestionSetModalVisible,
    setCreateQuestionSetModalVisible,
  ] = useState(false);
  useEffect(() => {
    getValueFor('token');
  }, []);
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
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#f8f8ff' }} />
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
            Hello User
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
          Lorem ipsumd dolor sit amet, consectetuer adipscing elit.
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
              onPress={() => navigation.navigate('QuestionSetList')}
            >
              <Icon name="pencil" style={{ fontSize: 20 }} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#1abc9c"
              spaceBetween={-50}
              title="View your Students"
              onPress={() => alert('Students')}
            >
              <Icon name="account-group" style={{ fontSize: 20 }} />
            </ActionButton.Item>
          </ActionButton>
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
          <Tab.Screen name="Physics" component={SecondRoute} />
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
