import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { px2dp } from '../../utils/px2dp';

export default function Listitem({ msg, color }) {
  return (
    <View style={[styles.wrapper, { backgroundColor: color }]}>
      <Text style={styles.title}>{msg}</Text>
      <Text style={styles.description}>{msg}</Text>
      <Text style={styles.date}>{msg}</Text>
    </View>
  );
}

Listitem.propTypes = {
  msg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    height: px2dp(150),
    backgroundColor: '#def2ff',
    margin: px2dp(20),
    borderRadius: px2dp(10),
    justifyContent: 'center',
    paddingLeft: px2dp(30),
  },
  title: {
    fontSize: px2dp(30),
    fontWeight: '900',
  },
  description: {
    fontSize: px2dp(25),
  },
  date: {
    fontSize: px2dp(20),
    color: '#aaa',
  },
});
