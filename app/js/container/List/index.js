import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Listitem from '../../component/Listitem';

/* 不同类型对应不同背景 */
const colorSet = ['#def2ff', '#bfeabe', '#f2d8c6', '#f0efb0'];

export default class List extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {mockData.map((data, idx) => <Listitem msg={data} color={colorSet[idx % 4]} />)}
      </ScrollView>
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
