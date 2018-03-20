import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { px2dp } from '../../utils/px2dp';

export default function Listitem({
  title, content, time, color, onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: color }]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={1}>{content}</Text>
      <Text style={styles.date}>{time}</Text>
    </TouchableOpacity>
  );
}

Listitem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
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
