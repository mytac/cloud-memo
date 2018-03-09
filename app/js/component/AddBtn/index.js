import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { px2dp } from '../../utils/px2dp';

export default function AddBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Icon name="plus" size={30} color="#fff" />
    </TouchableOpacity>
  );
}

AddBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    width: px2dp(120),
    height: px2dp(120),
    borderRadius: px2dp(60),
    backgroundColor: '#33b5ff',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: px2dp(100),
    right: px2dp(50),
    zIndex: 5,
  },
});
