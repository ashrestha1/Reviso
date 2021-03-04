import React, { useState } from 'react'
import { View, Button } from 'react-native'
import styles from '../styles'
import MyTextInput from '../components/MyTextInput'
import { problemSetsSelector } from '../redux/selectors'
import { useSelector, useDispatch } from 'react-redux'

const createProblemSet = (navigation, dispatch, problemSetsCount, problemSet) => {
  dispatch({ type: 'problemSet/new', payload: { problemSet } })
  navigation.pop()
  navigation.navigate('PracticeSetEdit', { idx: problemSetsCount })
}

export default ({ navigation }) => {
  const problemSetsCount = useSelector(problemSetsSelector).length
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ question, setQuestion ] = useState('')
  const [ correctAnswer, setCorrectAnswer ] = useState('')
  const [ wrongAnswer1, setWrongAnswer1 ] = useState('')
  const [ wrongAnswer2, setWrongAnswer2 ] = useState('')
  const [ wrongAnswer3, setWrongAnswer3 ] = useState('')
  const dispatch = useDispatch()
  return (
    <View style={styles.topLevel}>
      <MyTextInput placeholder='Title' value={title} onChangeText={newTitle => setTitle(newTitle)} />
      <MyTextInput placeholder='Description' value={description} onChangeText={newDescription => setDescription(newDescription)} />
      <MyTextInput placeholder='Question' value={question} onChangeText={newQuestion => setQuestion(newQuestion)} />
      <MyTextInput placeholder='Correct Answer' value={correctAnswer} onChangeText={newCorrectAnswer => setCorrectAnswer(newCorrectAnswer)} />
      <MyTextInput placeholder='Wrong Answer 1' value={wrongAnswer1} onChangeText={newWrongAnswer1 => setWrongAnswer1(newWrongAnswer1)} />
      <MyTextInput placeholder='Wrong Answer 2' value={wrongAnswer2} onChangeText={newWrongAnswer2 => setWrongAnswer2(newWrongAnswer2)} />
      <MyTextInput placeholder='Wrong Answer 3' value={wrongAnswer3} onChangeText={newWrongAnswer3 => setWrongAnswer3(newWrongAnswer3)} />
      <Button title='Add new problem set' disabled={title === '' || description === '' || question === '' || correctAnswer === '' || wrongAnswer1 === '' || wrongAnswer2 === '' || wrongAnswer3 === ''} onPress={() => createProblemSet(navigation, dispatch, problemSetsCount, { title, description, problems: [{ question, answers: [ correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 ] }] })} />
    </View>
  )
}
