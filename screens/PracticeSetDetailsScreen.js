import React from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import styles from '../styles'
import { useDispatch } from 'react-redux'

const deleteProblemSet = (navigation, dispatch, idx) => {
  dispatch({ type: 'problemSet/delete', payload: { idx } })
  navigation.pop()
}

export default ({ route, navigation }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.topLevel}>
      <ScrollView>
        <View style={styles.paddedElement}><Text>{route.params.description}</Text></View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
	  <View style={[{ flex: 1 }, styles.button]}><Button title="Edit" disabled={true} /></View>
	  <View style={[{ flex: 1 }, styles.button]}><Button title="Delete" onPress={() => deleteProblemSet(navigation, dispatch, route.params.idx)} /></View>
        </View>
        <View style={styles.paddedElement}><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Questions</Text></View>
        <View>
          { route.params.problems.map((problem, idx) => (
	      <View style={styles.paddedElement} key={idx}>
                <Text>{idx + 1}. {problem.question}</Text>
                <Text style={{ color: 'green' }}>Correct Answer: {problem.answers[0]}</Text>
                <Text>Wrong Answers:</Text>
                { problem.answers.slice(1).map((answer, i) => <Text key={i}>- {answer}</Text>) }
              </View>
	    )) }
        </View>
      </ScrollView>
    </View>
  )
}
