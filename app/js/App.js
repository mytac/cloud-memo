/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { StackNavigator } from 'react-navigation';
import Screens from './screens';
import { setServerUrl, getServerUrl } from './utils/localStorage';
import config from './constants/config';

getServerUrl().then((url) => {
  if (!url) {
    setServerUrl(config.serverUrl).then((status) => {
      console.log('status', status);
    });
  }
});

export default StackNavigator(Screens, {
  initialRouteName: 'List',
});
