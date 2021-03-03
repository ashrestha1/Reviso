import React from 'react'
import { View, Button } from 'react-native'
import styles from '../styles'

export default ({ navigation }) => (
  <View style={styles.topLevel}>
    <View style={styles.paddedElement}><Button title="Sign Up" disabled={true} /></View>
    <View style={styles.paddedElement}><Button title="Log In" disabled={true} /></View>
    <View style={styles.paddedElement}><Button title="Practice" onPress={() => navigation.navigate('PracticeHome')} /></View>
  </View>
)
