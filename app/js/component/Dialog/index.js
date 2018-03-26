import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { px2dp } from '../../utils/px2dp';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{ marginBottom: px2dp(250) }}>
        <Modal
          animationType="slide"
          transparent
          visible={this.props.isVisible}
        >
          <View style={styles.mask}>
            <View style={styles.innerContainer}>
              <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>{this.props.title}</Text>
              </View>
              <View>
                {React.Children.map(this.props.children, child => child)}
              </View>

              <TouchableOpacity onPress={this.props.onClose}>
                <Text>关闭</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

Dialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Dialog.defaultProps = {
  title: '提示',
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
});
