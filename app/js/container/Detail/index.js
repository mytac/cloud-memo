import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TextInput, StyleSheet, Animated, DeviceEventEmitter } from 'react-native';
import { px2dp } from '../../utils/px2dp';
import request from '../../utils/request';
import { Toast } from '../../component/Toast/index';
import { setArticle } from '../../utils/localStorage';


export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* 文本 */
      title: '',
      content: '',

      inputBoxHeight: new Animated.Value(),
    };
    this.onChange = this.onChange.bind(this);
    this.registEmitter = this.registEmitter.bind(this);
  }

  componentDidMount() {
    this.registEmitter();

    /* try {
      const body = await request('/findByLabel', { id: '5a9cb46aa0f7ed28149b0dd0' });
      console.log('body', body);
    } catch (e) {
      Toast.show(e.code, Toast.SHORT);
    } */
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
      DeviceEventEmitter.emit('isUploaded', true);
    });
  }

  updateArticle() {
    const { updateArticle, index } = this.props.navigation.state.params;
    const { title, content } = this.state;
    updateArticle(title, content, index);
  }

  render() {
    const { inputBoxHeight } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Animated.View style={{ height: inputBoxHeight }}>
          <TextInput
            placeholder="标题"
            underlineColorAndroid="transparent"
            style={[{ flex: 1 }, style.inputBox]}
            onChangeText={(text) => { this.setState({ title: text }); }}
          />
          <TextInput
            placeholder="内容"
            style={[{ flex: 1 }, style.inputBox]}
            multiline // 代表可以输入多行
            onContentSizeChange={this.onChange}
            underlineColorAndroid="transparent"
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
