import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { nightModelStyle } from '../../constants/style';
import { px2dp } from '../../utils/px2dp';

const { wrapper, text } = nightModelStyle;

export default function navOptions(title = '', restParams = {}, isNightModel, isShowHeader = true) {
  if (!isShowHeader) return { header: null };
  return {
    title,
    headerTitle: (
      <View style={styles.header}>
        <Text style={[{ fontSize: px2dp(25) }, isNightModel ? text : {}]}>
          {title}
        </Text>
      </View>),
    headerStyle: isNightModel ? wrapper : {},
    headerLeft: (restParams && restParams.headerLeft) || <View />,
    headerRight: (restParams && restParams.headerRight) || <View />,
  };
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    flex: 1,
  },
});
