import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './redux/store'
import HomeScreen from './screens/HomeScreen'
import PracticeHomeScreen from './screens/PracticeHomeScreen'
import PracticeSetHomeScreen from './screens/PracticeSetHomeScreen'
import PracticeSetDetailsScreen from './screens/PracticeSetDetailsScreen'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Reviso - Home' }} />
      <Stack.Screen name="PracticeHome" component={PracticeHomeScreen} options={{ title: 'Reviso - Practice Mode' }} />
      <Stack.Screen name="PracticeSetHome" component={PracticeSetHomeScreen} options={{ title: 'Reviso - Practice Sets' }} />
      <Stack.Screen name="PracticeSetDetails" component={PracticeSetDetailsScreen} options={({ route }) => ({ title: route.params.title })} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
