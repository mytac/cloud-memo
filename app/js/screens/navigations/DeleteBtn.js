import React from 'react';
import { Animated, Easing, DeviceEventEmitter, AsyncStorage } from 'react-native';
import { NavBtn } from './NavBtn';
import { Toast } from '../../component/Toast';

export default class DeleteBtn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<NavBtn
      iconName="trash"
      onPress={() => {
        DeviceEventEmitter.emit('deleteArticle');

    }}
    />);
  }
}
