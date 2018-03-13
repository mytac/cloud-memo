import React from 'react';
import { Animated, Easing, DeviceEventEmitter } from 'react-native';
import { NavBtn } from './NavBtn';
import { Toast } from '../../component/Toast';

const TIMES = 30;

export default class UploadBtn extends React.Component {
  static uploadEvent() {
    DeviceEventEmitter.emit('uploading', true);
  }

  constructor(props) {
    super(props);
    this.state = {
      rotateValue: new Animated.Value(0),
    };
    this.stopAnimate = this.stopAnimate.bind(this);
    this.startAnimate = this.startAnimate.bind(this);
  }

  componentDidMount() {
    this.deEmitter = DeviceEventEmitter.addListener('isUploaded', (a) => {
      if (a) {
        setTimeout(() => {
          this.stopAnimate();
        }, 1000);
      }
    });
  }

  componentWillUnmount() {
    this.deEmitter.remove();
  }

  startAnimate() {
    UploadBtn.uploadEvent();
    Toast.show('上传中...', 5000);

    Animated.timing(this.state.rotateValue, {
      toValue: 360 * TIMES,
      duration: 800 * TIMES,
      easing: Easing.linear,
    }).start();// 开始spring动画
  }

  stopAnimate() {
    this.state.rotateValue.stopAnimation(() => {
      Toast.show('上传完成', Toast.SHORT);
    });
    this.state.rotateValue.setValue(0);
  }

  render() {
    return (
      <Animated.View style={{
        transform: [{ rotate: this.state.rotateValue.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) }],
        }}
      >
        <NavBtn onPress={this.startAnimate} iconName="refresh" />
      </Animated.View>
    );
  }
}

