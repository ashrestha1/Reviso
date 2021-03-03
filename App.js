import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './redux/store'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Reviso" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
