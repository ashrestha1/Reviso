import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionsScreen';
import PracticeSetHomeScreen from './screens/PracticeSetHomeScreen';
import PracticeSetDetailsScreen from './screens/PracticeSetDetailsScreen';
import PracticeSetEditScreen from './screens/PracticeSetEditScreen';
import PracticeSetNewProblemScreen from './screens/PracticeSetNewProblemScreen';
import PracticeProblemEditScreen from './screens/PracticeProblemEditScreen';
import PracticeSetNewScreen from './screens/PracticeSetNewScreen';
import QuestionSetListScreen from './screens/QuestionSetListScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import StudentScoreListScreen from './screens/StudentScoreListScreen';
import QuestionEditScreen from './screens/QuestionEditScreen';
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
const App = () => (
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
        name="QuestionEdit"
        component={QuestionEditScreen}
        options={{ title: 'Reviso - Question Edit' }}
      />
      <Stack.Screen
        name="QuestionSetList"
        component={QuestionSetListScreen}
        options={{ title: 'Reviso - Question Set List' }}
      />

      <Stack.Screen
        name="PracticeSetHome"
        component={PracticeSetHomeScreen}
        options={{ title: 'Reviso - Practice Sets' }}
      />
      <Stack.Screen
        name="PracticeSetDetails"
        component={PracticeSetDetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="PracticeSetEdit"
        component={PracticeSetEditScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="PracticeSetNewProblem"
        component={PracticeSetNewProblemScreen}
        options={{ title: 'Create New Question' }}
      />
      <Stack.Screen
        name="PracticeProblemEdit"
        component={PracticeProblemEditScreen}
        options={{ title: 'Edit Question' }}
      />
      <Stack.Screen
        name="PracticeSetNew"
        component={PracticeSetNewScreen}
        options={{ title: 'Create New Problem Set' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
