import React from 'react';
import { Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from '../../component/Dialog';

export default class NightModel extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { isVisible, onClose } = this.props;
    return (
      <Dialog
        title="夜间模式"
        isVisible={isVisible}
        onClose={onClose}
      />
    );
  }
}
