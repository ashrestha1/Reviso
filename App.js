import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider, useSelector } from 'react-redux'
import store from './redux/store'

const answerSelector = state => state.answer

const HomeScreen = () => {
  const answer = useSelector(answerSelector)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Reviso</Text>
      <Text>The answer to everything is {answer}</Text>
    </View>
  )
}

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
