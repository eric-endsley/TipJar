import React from 'react';
import colors from '../config/colors'
import { View } from 'react-native'

export default function ListSeparator() {
  return (
    <View style= {{
      height: 5,
      width: "100%",
      backgroundColor: colors.grey,
    }} />
  )
}