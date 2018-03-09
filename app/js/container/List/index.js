import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import Listitem from '../../component/Listitem';
import AddBtn from '../../component/AddBtn';

/* 不同类型对应不同背景 */
const colorSet = ['#def2ff', '#bfeabe', '#f2d8c6', '#f0efb0'];

export default class List extends Component {
  constructor(props) {
    super(props);
    this.goto = this.goto.bind(this);
  }

  goto(tar) {
    this.props.navigation.navigate(tar);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddBtn onPress={() => this.goto('Detail')} />
        <ScrollView style={{ flex: 1 }}>
          {mockData.map((data, idx) => <Listitem msg={data} color={colorSet[idx % 4]} onPress={() => this.goto('Detail')} />)}
        </ScrollView>
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
];
