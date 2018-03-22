import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { px2dp } from '../../utils/px2dp';

export default function Nav() {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.grid, styles.leftGrid]}>
        <TouchableOpacity style={{ width: px2dp(60) }}>
          <Icon name="folder" size={px2dp(40)} />
        </TouchableOpacity>
        <Text style={styles.header}>All</Text>
      </View>
      <View style={[styles.grid, styles.rightGrid]}>
        <TouchableOpacity style={{ width: px2dp(100) }} >
          <Icon name="refresh" size={px2dp(40)} />
        </TouchableOpacity>
        <Menu onSelect={value => alert(`User selected the number ${value}`)}>
          <MenuTrigger>
            <Icon name="bars" size={px2dp(40)} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption value={1}>
              <Text>One</Text>
            </MenuOption>
            <MenuOption value={2}>
              <Text>Two</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: px2dp(40),
    paddingTop: px2dp(120),
    backgroundColor: '#fff',
    height: px2dp(180),
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
