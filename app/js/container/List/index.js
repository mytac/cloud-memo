import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Listitem from '../../component/Listitem';
import AddBtn from '../../component/AddBtn';

/* 不同类型对应不同背景 */
const colorSet = ['#def2ff', '#bfeabe', '#f2d8c6', '#f0efb0'];

export default class List extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddBtn />
        <ScrollView style={{ flex: 1 }}>
          {mockData.map((data, idx) => <Listitem msg={data} color={colorSet[idx % 4]} onPress={() => this.props.navigation.navigate('Detail')} />)}
        </ScrollView>
      </View>
    );
  }
}

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
