import React, { Component } from 'react';
import { ScrollView, TextInput, StyleSheet, Animated } from 'react-native';
import { px2dp } from '../../utils/px2dp';
import request from '../../utils/request';
import { Toast } from '../../component/Toast/index';


export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBoxHeight: new Animated.Value(),
    };
    this.onChange = this.onChange.bind(this);
  }

  async componentDidMount() {
    try {
      const body = await request('/findByLabel', { id: '5a9cb46aa0f7ed28149b0dd0' });
      console.log('body', body);
    } catch (e) {
      Toast.show(e.code, Toast.SHORT);
    }
  }

  onChange(event) {
    const contentSize = event.nativeEvent.contentSize.height;
    Animated.timing(
      this.state.inputBoxHeight,
      {
        toValue: contentSize,
      },
    ).start();
  }

  render() {
    const { inputBoxHeight } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Animated.View style={{ height: inputBoxHeight }}>
          <TextInput
            style={[{ flex: 1 }, style.inputBox]}
            multiline // 代表可以输入多行
            defaultValue="可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行"
            onContentSizeChange={this.onChange}
            underlineColorAndroid="transparent"
          />
        </Animated.View>
      </ScrollView>
    );
  }
}


const style = StyleSheet.create({
  inputBox: {
    fontSize: px2dp(45),
  },
});
