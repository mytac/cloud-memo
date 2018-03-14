import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { px2dp } from '../../utils/px2dp';

export default function Nav() {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.grid, styles.leftGrid]}>
        <TouchableOpacity style={{ width: px2dp(60) }}>
          <Icon name="folder" size={25} />
        </TouchableOpacity>
        <Text style={styles.header}>All</Text>
      </View>

      <View style={[styles.grid, styles.rightGrid]}>
        <TouchableOpacity style={{ width: px2dp(100) }} >
          <Icon name="refresh" size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={{ width: px2dp(50) }}>
          <Icon name="bars" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: px2dp(40),
    backgroundColor: '#fff',
    height: px2dp(80),
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    fontSize: px2dp(40),
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftGrid: {
    justifyContent: 'flex-start',
  },
  rightGrid: {
    justifyContent: 'flex-end',
  },
});
