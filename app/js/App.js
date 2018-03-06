/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { StackNavigator } from 'react-navigation';
import Screens from './screens';

export default StackNavigator(Screens, {
  initialRouteName: 'List',
});
