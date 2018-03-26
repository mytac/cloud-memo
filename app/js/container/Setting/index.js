import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from '../../component/Dialog';

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isVisible, onClose } = this.props;
    return (
      <Dialog isVisible={isVisible} onClose={onClose}>
        <Text>DIALOG</Text>
      </Dialog>
    );
  }
}

Setting.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
