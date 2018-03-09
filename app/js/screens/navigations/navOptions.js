import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { px2dp } from '../../utils/px2dp';

export default function navOptions(title = '', isShowHeader = true, restParams = {}) {
  if (!isShowHeader) return { header: null };
  return {
    title,
    headerTitle: (
      <View style={styles.header}>
        <Text style={{ fontSize: px2dp(25) }}>
          {title}
        </Text>
      </View>),
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
