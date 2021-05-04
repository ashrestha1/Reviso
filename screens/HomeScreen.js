import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ImageBackground,
  TextInput,
  useWindowDimensions,
  Animated,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import QuestionSet from '../components/QuestionSet';

const { width } = Dimensions.get('screen');
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default ({ navigation }) => {
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
            horizontal
          />
          <Block flex row>
            <QuestionSet
              product={{ title: '1' }}
              navigation={navigation}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <QuestionSet product={{ title: '1' }} navigation={navigation} />
          </Block>
          <QuestionSetx
            product={{ title: '1' }}
            navigation={navigation}
            horizontal
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
          <QuestionSet product={{ title: '1' }} navigation={navigation} full />
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
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          paddingHorizontal: 40,
        }}
      >
        <Icon name="menu" size={30} color="#FFF" style={{ width: 20 }} />
        <Icon
          name="account-circle"
          size={33}
          color="#FFF"
          style={{ marginLeft: 230 }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 40,
          marginTop: 25,
          flex: 1,
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

        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            activeTintColor: 'white',
            inactiveTintColor: '#778899',
            indicatorStyle: { backgroundColor: 'white' },
            style: { backgroundColor: '#f7b640' },
          }}
          style={{
            marginHorizontal: '-13%',
          }}
        >
          <Tab.Screen name="Math" component={FirstRoute} />
          <Tab.Screen name="Computer" component={SecondRoute} />
          <Tab.Screen name="Physics" component={SecondRoute} />
        </Tab.Navigator>
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
