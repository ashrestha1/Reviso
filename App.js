import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Redux2/reducers';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionsScreen';
import QuestionListScreen from './screens/QuestionListScreen';
import QuestionSetListScreen from './screens/QuestionSetListScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import StudentScoreListScreen from './screens/StudentScoreListScreen';
import Splash from './screens/Splash';

const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ title: 'Reviso - Splash' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Reviso - Login' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Reviso - Register' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Reviso - Home' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Reviso - Profile' }}
        />
        <Stack.Screen
          name="StudentScoreList"
          component={StudentScoreListScreen}
          options={{ title: 'Reviso - Student Score List' }}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{ title: 'Reviso - Question' }}
        />
        <Stack.Screen
          name="QuestionList"
          component={QuestionListScreen}
          options={{ title: 'Reviso - Question List' }}
        />
        <Stack.Screen
          name="QuestionSetList"
          component={QuestionSetListScreen}
          options={{ title: 'Reviso - Question Set List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const store = createStore(reducers, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
