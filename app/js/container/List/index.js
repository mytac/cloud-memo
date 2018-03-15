import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import Listitem from '../../component/Listitem';
import AddBtn from '../../component/AddBtn';
import Nav from './Nav';
import { getArticles } from '../../utils/localStorage';

/* 不同类型对应不同背景 */
const colorSet = ['#def2ff', '#bfeabe', '#f2d8c6', '#f0efb0'];

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.goto = this.goto.bind(this);
    this.load = this.load.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
  }

  componentDidMount() {
    this.getNewData();
  }

  componentWillUnmount() {
    console.log('unmount');
    // 退出时存到本地
  }


  getNewData() {
    getArticles().then((articles) => {
      this.setState({
        articles,
      });
    });
  }

  updateArticle(title, content, index) {
    const { articles } = this.state;
    const newArticle = [].concat(articles);
    const date = new Date();
    const newData = { time: date.getTime(), title, content };
    if (index) {
      newArticle[index] = newData;
    } else {
      newArticle.push(newData);
    }
    this.setState({
      articles: newArticle,
    });
  }

  goto(tar, index) {
    this.props.navigation.navigate(
      tar,
      { articles: this.state.articles, index, updateArticle: this.updateArticle },
    );
  }

  render() {
    const { articles } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Nav />
        <AddBtn onPress={() => this.goto('Detail')} />
        <View style={{ flex: 1 }}>
          {articles.length > 0 ?
            <FlatList
              data={articles}
              renderItem={({ item, index }) => (
                <Listitem msg={item.title} color={colorSet[index % 4]} onPress={() => this.goto('Detail', index)} />
            )}
              onEndReachedThreshold={10}
              onEndReached={this.load}
              style={{ flex: 1 }}
            />
            :
            <Text>没有记录</Text>}
        </View>
      </View>
    );
  }
}

List.propTypes = {
  navigation: PropTypes.object.isRequired,
};

