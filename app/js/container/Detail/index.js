import React, { Component } from 'react';
import { ScrollView, TextInput, StyleSheet, Animated } from 'react-native';
import { px2dp } from '../../utils/px2dp';


export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBoxHeight: new Animated.Value(),
    };
    this.onChange = this.onChange.bind(this);
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
