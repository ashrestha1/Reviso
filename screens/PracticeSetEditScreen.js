import React from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import styles from '../styles'
import { useSelector } from 'react-redux'
import { problemSetSelector } from '../redux/selectors'

export default ({ route, navigation }) => {
  const problemSet = useSelector(problemSetSelector(route.params.idx))
  if (!problemSet)
    return <View />
  return (
    <View style={styles.topLevel}>
      <ScrollView>
        <View style={styles.paddedElement}>
	  <Text>{problemSet.description}</Text>
        </View>
	<View style={styles.paddedElement}>
          <Button title='Add New Question' onPress={() => navigation.navigate('PracticeSetNewProblem', { idx: route.params.idx })} />
	</View>
	{ problemSet.problems.map((problem, jdx) => (
            <View key={jdx} style={styles.paddedElement}>
              <Button title={`Question ${jdx + 1}`} disabled={true} />
            </View>
	  )) }
      </ScrollView>
    </View>
  )
}
