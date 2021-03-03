import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const answerSelector = state => state.answer

export default () => {
  const answer = useSelector(answerSelector)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Reviso</Text>
      <Text>The answer to everything is {answer}</Text>
    </View>
  )
}
