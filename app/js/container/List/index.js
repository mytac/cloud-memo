import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import Listitem from '../../component/Listitem';
import AddBtn from '../../component/AddBtn';
import Nav from './Nav';

/* 不同类型对应不同背景 */
const colorSet = ['#def2ff', '#bfeabe', '#f2d8c6', '#f0efb0'];

export default class List extends Component {
  constructor(props) {
    super(props);
    this.goto = this.goto.bind(this);
    this.load = this.load.bind(this);
  }

  goto(tar) {
    this.props.navigation.navigate(tar);
  }

  load() {
    console.log('data');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Nav />
        <AddBtn onPress={() => this.goto('Detail')} />
        <View style={{ flex: 1 }}>
          {mockData.length > 0 ?
            <FlatList
              data={mockData}
              renderItem={({ item, index }) => (
                <Listitem msg={item} color={colorSet[index % 4]} onPress={() => this.goto('Detail')} />
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

const mockData = [
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
];
