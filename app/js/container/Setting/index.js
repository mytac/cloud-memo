import React from 'react';
import { Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from '../../component/Dialog';
import { nightModelStyle } from '../../constants/style';
import { px2dp } from '../../utils/px2dp';
import { setServerUrl, getServerUrl } from '../../utils/localStorage';

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUrl: '192.168.10.248:8888',
    };
    this.btnPress = this.btnPress.bind(this);
  }

  componentDidMount() {
    getServerUrl().then((serverUrl) => {
      this.setState({
        serverUrl,
      });
    });
  }

  btnPress() {
    setServerUrl(this.state.serverUrl).then((status) => {
      if (status) { this.props.onClose(); }
    });
  }

  render() {
    const { isNightModel } = this.props;
    const nText = isNightModel && nightModelStyle.text;
    return (
      <Dialog
        title="设置"
        isShowDefaultBtn={false}
        btnSetting={[{ name: '确定', onPress: this.btnPress }]}
        {...this.props}
      >
        <Text style={[{ fontSize: px2dp(26) }, nText]}>设置服务器地址</Text>
        <TextInput
          value={this.state.serverUrl}
          onChangeText={(txt) => { this.setState({ serverUrl: txt }); }}
          style={nText}
          selectionColor={isNightModel ? nText.color : ''}
          autoFocus
        />
      </Dialog>
    );
  }
}

Setting.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isNightModel: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
