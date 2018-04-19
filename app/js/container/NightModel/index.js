import React from 'react';
import { Switch, View } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from '../../component/Dialog';
import { px2dp } from '../../utils/px2dp';

export default function NightModel(props) {
  const { isNightModel, toggleSwitch } = props;
  return (
    <Dialog
      title="夜间模式"
      {...props}
    >
      <View style={{ width: px2dp(100) }}>
        <Switch
          disabled={false}
          onValueChange={(val) => {
              toggleSwitch(val);
          }}
          value={isNightModel}
        />
      </View>
    </Dialog>
  );
}

NightModel.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isNightModel: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
};
