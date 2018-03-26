import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { px2dp } from '../../utils/px2dp';

export default function Dialog({
  btnSetting, isShowDefaultBtn, title, isVisible, children, onClose,
}) {
  return (
    <View style={{ marginBottom: px2dp(250) }}>
      <Modal
        animationType="fade"
        transparent
        visible={isVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.mask}>
          <View style={styles.innerContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.contentWrapper}>
              {React.Children.map(children, child => child)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              {btnSetting.length > 0 && btnSetting.map(btn => (
                <TouchableOpacity
                  key={btn.name}
                  onPress={btn.onPress}
                  style={[styles.buttonWrapper, btn.btnStyle]}
                >
                  <Text style={[{ fontSize: px2dp(26) }, btn.textStyle]}>{btn.name}</Text>
                </TouchableOpacity>))}
              {isShowDefaultBtn &&
                <TouchableOpacity onPress={onClose} style={styles.buttonWrapper}>
                  <Text style={{ fontSize: px2dp(26) }}>关闭</Text>
                </TouchableOpacity>}

            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
}

Dialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isShowDefaultBtn: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string, // modal name
  children: PropTypes.node, // content node
  btnSetting: PropTypes.array,
};

Dialog.defaultProps = {
  title: '提示',
  children: <View />,
  btnSetting: [],
  isShowDefaultBtn: true,
};

const styles = StyleSheet.create({
  mask: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: px2dp(40),
  },
  innerContainer: {
    minWidth: px2dp(560),
    marginLeft: px2dp(86),
    marginRight: px2dp(85),
    borderRadius: px2dp(10),
    backgroundColor: '#fff',
    padding: px2dp(36),
  },
  titleWrapper: {
    marginBottom: px2dp(30),
  },
  titleText: {
    color: '#000',
    fontSize: px2dp(36),
  },
  contentWrapper: {
    marginBottom: px2dp(20),
  },
  buttonWrapper: {
    marginLeft: px2dp(20),
  },
});
