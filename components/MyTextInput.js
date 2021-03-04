import React from 'react'
import { View, TextInput } from 'react-native'
import styles from '../styles'

export default props => (
  <View style={[styles.paddedElement, { flexDirection: 'row' }]}>
    <TextInput style={[styles.textInput, { flex: 1 }]} {...props} />
  </View>
) 
