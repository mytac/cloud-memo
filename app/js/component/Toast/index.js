import { ToastAndroid, Platform } from 'react-native';
import RootToast from 'react-native-root-toast';

const Toast = Platform.select({
  ios: RootToast,
  android: ToastAndroid,
});

export { Toast };
