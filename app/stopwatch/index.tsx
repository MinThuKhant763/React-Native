import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Stopwatch</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default index
