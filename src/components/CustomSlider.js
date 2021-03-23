import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function CustomSlider() {
  const [value, setValue] = useState()
  return(
    <View>
      <Text>Default tip amount: ${value}</Text>
      <Slider step={1} 
      minimumValue={0} 
      maximumValue={20} 
      value={value} 
      onValueChange={slideValue=> setValue(slideValue)} />
    </View>
  )
}
 