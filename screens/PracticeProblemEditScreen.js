import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles'
import { useSelector, useDispatch } from 'react-redux'
import { problemSetSelector } from '../redux/selectors'

const deleteProblem = (navigation, dispatch, idx, jdx) => {
  dispatch({ type: 'problemSet/deleteProblem', payload: { idx, jdx } })
  navigation.pop()
}

export default ({ route, navigation }) => {
  const problemSet = useSelector(problemSetSelector(route.params.idx))
  const problem = problemSet.problems[route.params.jdx]
  const dispatch = useDispatch()
  if (!problem)
    return <View />
  return (
    <View style={[styles.topLevel, { alignItems: 'stretch', justifyContent: 'flex-start' }]}>
      <View style={styles.paddedElement}>
        <Text>
	  <Text style={{ fontWeight: 'bold' }}>Q: </Text>
	  { problem.question }
        </Text>
      </View>
      <View style={styles.paddedElement}>
        <Text style={{ color: 'green' }}>Correct answer: { problem.answers[0] }</Text>
      </View>
      <View style={styles.paddedElement}>
        <Text>Wrong answers:</Text>
	{ problem.answers.slice(1).map((answer, k) => <Text key={k}>- { answer }</Text>) }
      </View>
      <View style={styles.paddedElement}>
        <Button title='Delete' disabled={problemSet.problems.length === 1} onPress={() => deleteProblem(navigation, dispatch, route.params.idx, route.params.jdx)} />
      </View>
    </View>
  )
}
