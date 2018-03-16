import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TextInput, StyleSheet, Animated, DeviceEventEmitter } from 'react-native';
import { px2dp } from '../../utils/px2dp';
import request from '../../utils/request';
import { Toast } from '../../component/Toast/index';


export default class Detail extends Component {
  constructor(props) {
    super(props);
    const { index, articles } = this.props.navigation.state.params;
    const currentArticle = articles[index];
    this.state = {
      /* 文本 */
      title: index > -1 ? currentArticle.title : '',
      content: index > -1 ? currentArticle.content : '',

      inputBoxHeight: new Animated.Value(),
    };
    this.onChange = this.onChange.bind(this);
    this.registEmitter = this.registEmitter.bind(this);
  }

  componentDidMount() {
    this.registEmitter();
  }

  componentWillUnmount() {
    this.updateArticle();
    this.deEmitter.remove();
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

  registEmitter() {
    this.deEmitter = DeviceEventEmitter.addListener('uploading', () => {
      // 上传操作

        // 上传成功
      DeviceEventEmitter.emit('isUploaded', true);
    });
  }

  updateArticle() {
    const { updateArticle, index } = this.props.navigation.state.params;
    const { title, content } = this.state;
    updateArticle(title, content, index);
  }

  render() {
    const { inputBoxHeight, title, content } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Animated.View style={{ height: inputBoxHeight }}>
          <TextInput
            placeholder="标题"
            underlineColorAndroid="transparent"
            style={[{ flex: 1 }, style.inputBox]}
            value={title}
            onChangeText={(text) => { this.setState({ title: text }); }}
          />
          <TextInput
            placeholder="内容"
            style={[{ flex: 1 }, style.inputBox]}
            multiline // 代表可以输入多行
            onContentSizeChange={this.onChange}
            underlineColorAndroid="transparent"
            value={content}
            onChangeText={(text) => { this.setState({ content: text }); }}
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

Detail.propTypes = {
  navigation: PropTypes.object.isRequired,
};
