import React from 'react';
import { Text, TextInput, Switch, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from '../../component/Dialog';
import { px2dp } from '../../utils/px2dp';

export default class NightModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }


  render() {
    const { isVisible, onClose } = this.props;
    const { isOpen } = this.state;
    return (
      <Dialog
        title="夜间模式"
        isVisible={isVisible}
        onClose={onClose}
      >
        <Switch
          style={styles.switchWrapper}
          disabled={false}
          onTintColor="green"
          onValueChange={(val) => {
              this.setState({
              isOpen: val,
          });
          }}
          value={isOpen}
          tintColor="green"
        />
      </Dialog>
    );
  }
}

const styles = StyleSheet.create({
  switchWrapper: {
    width: px2dp(100),
  },
});
