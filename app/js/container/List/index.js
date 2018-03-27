import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { MenuContext } from 'react-native-menu';
import Listitem from '../../component/Listitem';
import AddBtn from '../../component/AddBtn';
import Nav from './Nav';
import { getArticles, setArticles } from '../../utils/localStorage';
import { nightModelStyle } from '../../constants/style';
import Setting from '../Setting';

/* 不同类型对应不同背景 */
const colorSet = ['#def2ff', '#bfeabe', '#f2d8c6', '#f0efb0'];

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isVisible: false,
      isNightModel: false,
    };
    this.goto = this.goto.bind(this);
    this.getNewData = this.getNewData.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.getNewData();
  }

  componentDidUpdate() {
    setArticles(this.state.articles).then((status) => {
      console.log(status);
    });
  }


  getNewData() {
    getArticles()
      .then((value) => {
        if (value) {
          this.setState({ articles: value });
        }
      });
  }

  updateArticle(newArticles) {
    this.setState({
      articles: newArticles,
    });
  }

  goto(tar, index) {
    this.props.navigation.navigate(
      tar,
      { articles: this.state.articles, index, updateArticle: this.updateArticle },
    );
  }

  toggleModal() {
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible,
    });
  }


  render() {
    const { articles, isNightModel } = this.state;
    const { text, wrapper } = nightModelStyle;

    const nightTextColor = !isNightModel && text;
    const nightWrapper = !isNightModel && wrapper;

    const nightModelStyleProp = { nightTextColor, nightWrapper };

    return (
      <MenuContext style={{ flex: 1 }}>
        <Nav selectSetting={this.toggleModal} isNightModel={isNightModel} />
        <AddBtn onPress={() => this.goto('Detail')} />
        <View style={[{ flex: 1 }, nightWrapper]}>
          {articles && articles.length > 0 ?
            <FlatList
              data={articles}
              renderItem={({ item, index }) => (
                <Listitem
                  title={item.title}
                  content={item.content.length > 25 ? `${item.content.slice(0, 24)}...` : item.content}
                  time={item.time || ''}
                  color={colorSet[index % 4]}
                  onPress={() => this.goto('Detail', index)}
                  isUpload={!!item.id}
                />
            )}
              onEndReachedThreshold={10}
              onEndReached={this.load}
              style={{ flex: 1 }}
            />
            :
            <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, nightWrapper]}>
              <Text style={nightTextColor}>没有记录</Text>
            </View>
          }
        </View>
        <Setting
          isVisible={this.state.isVisible}
          onClose={this.toggleModal}
          nightModelStyle={nightModelStyleProp}
        />
      </MenuContext>
    );
  }
}

List.propTypes = {
  navigation: PropTypes.object.isRequired,
};

