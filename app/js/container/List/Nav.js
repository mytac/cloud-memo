import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { px2dp } from '../../utils/px2dp';

const menuSet = [
  { title: '设置', value: 'setting' },
  { title: '夜间模式切换', value: 'night-model' },
];

export default function Nav({ selectSetting }) {
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
        <Menu
          onSelect={value => (value === 'setting' ? selectSetting() : () => {})}
        >
          <MenuTrigger>
            <Icon name="bars" size={px2dp(40)} />
          </MenuTrigger>
          <MenuOptions>
            {menuSet.map(data => (
              <MenuOption value={data.value} key={data.value}>
                <Text style={{ fontSize: px2dp(25) }}>{data.title}</Text>
              </MenuOption>
              ))}
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

Nav.propTypes = {
  selectSetting: PropTypes.func.isRequired,
};


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
