import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { px2dp } from '../../utils/px2dp';

function NavBtn({ onPress, iconName, color }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
          width: px2dp(75),
          alignItems: 'center',
          justifyContent: 'center',
        }}
    >
      <Icon name={iconName} size={30} color={color} />
    </TouchableOpacity>
  );
}

function BackBtn({ navigation }) {
  return (
    <NavBtn iconName="angle-left" onPress={() => navigation.goBack()} />
  );
}

BackBtn.propTypes = {
  navigation: PropTypes.object.isRequired,
};

NavBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

NavBtn.defaultProps = {
  color: '#757575',
};

export { BackBtn, NavBtn };
