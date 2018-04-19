import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Menu, { MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { px2dp } from '../../utils/px2dp';
import { nightModelStyle } from '../../constants/style';
import { menuSet } from '../../constants/menu';

export default function Nav({
  isNightModel, openModal,
}) {
  const { wrapper, text } = nightModelStyle;
  const nightTextColor = isNightModel && text;
  const nightWrapper = isNightModel && wrapper;

  /* eslint-disable react/prop-types */
  const MyIcon = ({ name }) => <Icon name={name} size={px2dp(40)} style={nightTextColor} />;

  return (
    <View style={[styles.wrapper, nightWrapper]}>
      <View style={[styles.grid]}>
        <TouchableOpacity style={{ width: px2dp(60) }}>
          <MyIcon name="folder" />
        </TouchableOpacity>
        <Text style={[styles.header, nightTextColor]}>All</Text>
      </View>
      <View style={[styles.grid, styles.rightGrid]}>
        <TouchableOpacity style={{ width: px2dp(100) }} >
          <MyIcon name="refresh" />
        </TouchableOpacity>
        <Menu
          onSelect={value => openModal(value)}
        >
          <MenuTrigger>
            <MyIcon name="bars" />
          </MenuTrigger>
          <MenuOptions>
            {menuSet.map((data, index) => (
              <MenuOption value={index} key={data.value} style={nightWrapper}>
                <View>
                  <Text style={[{ fontSize: px2dp(25) }, nightTextColor]}>{data.title}</Text>
                </View>
              </MenuOption>
              ))}
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

Nav.propTypes = {
  openModal: PropTypes.func.isRequired,
  isNightModel: PropTypes.bool.isRequired,
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
