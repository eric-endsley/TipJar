import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import colors from '../config/colors'

export default function EventCard(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri:'https://picsum.photos/300/300'}} />
      <View style={styles.textarea}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.info}>{props.venue}</Text>
        <Text style={styles.info}>{props.performers}</Text>
        <Text style={styles.info}>{props.address}</Text>
        <Text style={styles.info}>{props.datetime}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderColor: colors.black,
    backgroundColor: colors.navy,
    borderWidth: 5,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
  textarea: {
    flex: 3
  },
  title: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 20
  },

})