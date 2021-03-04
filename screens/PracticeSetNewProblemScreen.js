import React, { useState } from 'react'
import { View, Text, ScrollView, Button, TextInput } from 'react-native'
import styles from '../styles'
import { useDispatch } from 'react-redux'
import MyTextInput from '../components/MyTextInput'

const addProblemToSet = (navigation, dispatch, idx, problem) => {
  dispatch({ type: 'problemSet/addProblem', payload: { idx, problem } })
  navigation.pop()
}

export default ({ route, navigation }) => {
  const [question, setQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [wrongAnswer1, setWrongAnswer1] = useState('')
  const [wrongAnswer2, setWrongAnswer2] = useState('')
  const [wrongAnswer3, setWrongAnswer3] = useState('')
  const dispatch = useDispatch()
  return (
    <View style={styles.topLevel}>
      <MyTextInput placeholder='Question' value={question} onChangeText={newQuestion => setQuestion(newQuestion)} />
      <MyTextInput placeholder='Correct Answer' value={correctAnswer} onChangeText={newCorrectAnswer => setCorrectAnswer(newCorrectAnswer)} />
      <MyTextInput placeholder='Wrong Answer 1' value={wrongAnswer1} onChangeText={newWrongAnswer1 => setWrongAnswer1(newWrongAnswer1)} />
      <MyTextInput placeholder='Wrong Answer 2' value={wrongAnswer2} onChangeText={newWrongAnswer2 => setWrongAnswer2(newWrongAnswer2)} />
      <MyTextInput placeholder='Wrong Answer 3' value={wrongAnswer3} onChangeText={newWrongAnswer3 => setWrongAnswer3(newWrongAnswer3)} />
      <Button title='Add new question' disabled={question === '' || correctAnswer === '' || wrongAnswer1 === '' || wrongAnswer2 === '' || wrongAnswer3 === ''} onPress={() => addProblemToSet(navigation, dispatch, route.params.idx, { question, answers: [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3] })} />
    </View>
  )
}
