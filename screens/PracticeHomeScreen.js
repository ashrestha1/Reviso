import React from 'react'
import { View, Button } from 'react-native'
import styles from '../styles'

export default ({ navigation }) => {
  return (
    <View style={styles.topLevel}>
      <View style={styles.paddedElement}><Button title='Practice!' disabled={true} /></View>
      <View style={styles.paddedElement}><Button title='Manage practice sets' onPress={() => navigation.navigate('PracticeSetHome')} /></View>
      <View style={styles.paddedElement}><Button title='Return to Main Menu' onPress={() => navigation.navigate('Home')} /></View>
    </View>
  )
}
