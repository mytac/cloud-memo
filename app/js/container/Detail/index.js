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
      isDelete: false, // 是否进行了删除操作，为了控制返回时是否进行更新操作
      /* 文本 */
      id: index > -1 ? currentArticle.id : '',
      title: index > -1 ? currentArticle.title : '',
      content: index > -1 ? currentArticle.content : '',
      inputBoxHeight: new Animated.Value(),
    };
    this.index = index;
    this.newArticles = [].concat(articles);
    this.onChange = this.onChange.bind(this);
    this.registEmitter = this.registEmitter.bind(this);
  }

  componentDidMount() {
    this.registEmitter();
  }

  componentWillUnmount() {
    /* eslint-disable no-unused-expressions */
    !this.state.isDelete && this.updateArticle();
    this.updateArticlesToStateTreeAndLocal(this.newArticles);
    this.deEmitter.remove();
    this.deleteEmitter.remove();
  }

  onChange(event) {
    // 输入时自动调节输入框高度
    const contentSize = event.nativeEvent.contentSize.height;
    Animated.timing(
      this.state.inputBoxHeight,
      {
        toValue: contentSize,
      },
    ).start();
  }

  updateArticlesToStateTreeAndLocal(newArticles) {
    const { updateArticle } = this.props.navigation.state.params;
    updateArticle(newArticles);
  }

  registEmitter() {
    this.deEmitter = DeviceEventEmitter.addListener('uploading', () => {
      // 上传操作
      this.uploadData();
      DeviceEventEmitter.emit('isUploaded', true);
    });

    this.deleteEmitter = DeviceEventEmitter.addListener('deleteArticle', () => {
      // 监听是否执行删除操作
      this.deleteData();
    });
  }

  async uploadData() {
    const { content, title, id } = this.state;
    try {
      const result = await request('/upload', { content, title, id });
      if (result.id) {
        this.setState({ id: result.id });
      }
      // 上传成功
      Toast.show('上传成功', Toast.SHORT);
    } catch (e) {
      Toast.show('上传失败', Toast.SHORT);
    }
  }

  updateArticle() {
    const { title, content, id } = this.state;
    const newData = { title, content, id };
    if (this.index !== undefined) {
      this.newArticles[this.index] = newData;
    } else {
      this.newArticles.push(newData);
    }
  }

  deleteData() {
    this.setState({ isDelete: true });
    this.newArticles.splice(this.index, 1);
    this.props.navigation.goBack();
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
