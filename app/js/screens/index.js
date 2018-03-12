import React from 'react';
import List from '../container/List';
import Detail from '../container/Detail';
import { navOptions, NavBtn, BackBtn } from './navigations';
import { Toast } from '../component/Toast';

export default {
  List: {
    screen: List,
    navigationOptions: () => navOptions(''),
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => navOptions(
      '编辑',
      {
        headerLeft: <BackBtn
          navigation={navigation}
          onPress={() => {
        Toast.show('test', Toast.SHORT);
      }}
        />,
      },
    ),
  },
};
