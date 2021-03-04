import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './redux/store'
import HomeScreen from './screens/HomeScreen'
import PracticeHomeScreen from './screens/PracticeHomeScreen'
import PracticeSetHomeScreen from './screens/PracticeSetHomeScreen'
import PracticeSetDetailsScreen from './screens/PracticeSetDetailsScreen'
import PracticeSetEditScreen from './screens/PracticeSetEditScreen'
import PracticeSetNewProblemScreen from './screens/PracticeSetNewProblemScreen'
import PracticeProblemEditScreen from './screens/PracticeProblemEditScreen'
import PracticeSetNewScreen from './screens/PracticeSetNewScreen'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Reviso - Home' }} />
      <Stack.Screen name="PracticeHome" component={PracticeHomeScreen} options={{ title: 'Reviso - Practice Mode' }} />
      <Stack.Screen name="PracticeSetHome" component={PracticeSetHomeScreen} options={{ title: 'Reviso - Practice Sets' }} />
      <Stack.Screen name="PracticeSetDetails" component={PracticeSetDetailsScreen} options={({ route }) => ({ title: route.params.title })} />
      <Stack.Screen name="PracticeSetEdit" component={PracticeSetEditScreen} options={({ route }) => ({ title: route.params.title })} />
      <Stack.Screen name="PracticeSetNewProblem" component={PracticeSetNewProblemScreen} options={{ title: 'Create New Question' }} />
      <Stack.Screen name="PracticeProblemEdit" component={PracticeProblemEditScreen} options={{ title: 'Edit Question' }} />
      <Stack.Screen name="PracticeSetNew" component={PracticeSetNewScreen} options={{ title: 'Create New Problem Set' }} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
