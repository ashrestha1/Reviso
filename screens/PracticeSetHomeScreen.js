import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import styles from '../styles'
import { useSelector } from 'react-redux'
import { problemSetsSelector } from '../redux/selectors'

export default ({ navigation }) => {
  const problemSets = useSelector(problemSetsSelector)
  return (
    <View style={styles.topLevel}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.paddedElement}><Button title='Import' disabled={true} /></View>
        <View style={styles.paddedElement}><Button title='New' onPress={() => navigation.navigate('PracticeSetNew')} /></View>
      </View>
      <View style={{ flex: 9 }}>
        <ScrollView>
	  { problemSets.map((problemSet, idx) => <View key={idx} style={styles.paddedElement}><Button title={problemSet.title} onPress={() => navigation.navigate('PracticeSetDetails', { title: problemSet.title, idx })} /></View>) }
        </ScrollView>
      </View>
    </View>
  )
}
