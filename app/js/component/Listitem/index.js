import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { px2dp } from '../../utils/px2dp';

export default function Listitem({
  title, content, time, color, onPress, isUpload,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: color }]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={1}>{content}</Text>
      <View style={styles.dateWrapper}>
        <Text style={styles.date}>{time}</Text>
        <Icon name="cloud-upload" size={px2dp(20)} color={isUpload ? '#1d9d74' : '#999'} style={{ marginLeft: px2dp(20) }} />
      </View>
    </TouchableOpacity>
  );
}

Listitem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isUpload: PropTypes.bool.isRequired,
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
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
