import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View><Text>Home Screen</Text>
    <Button onPress={() => navigation.navigate('About')} title='About Screen' />
    </View>
  )
}

export default HomeScreen