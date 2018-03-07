import React, { Component } from 'react';
import { ScrollView, TextInput, StyleSheet } from 'react-native';
import { px2dp } from '../../utils/px2dp';


export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBoxHeight: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const contentSize = event.nativeEvent.contentSize.height;
    this.setState({
      inputBoxHeight: contentSize,
    });
  }

  render() {
    const { inputBoxHeight } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        <TextInput
          style={[{ height: inputBoxHeight }, style.inputBox]}
          multiline // 代表可以输入多行
          defaultValue="可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行可以输入多行"
          onContentSizeChange={this.onChange}
        />
      </ScrollView>
    );
  }
}


const style = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    fontSize: px2dp(45),
  },
});
