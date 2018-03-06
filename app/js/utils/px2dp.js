import { Dimensions } from 'react-native';

const DESIGN_WIDTH = 750;

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export function px2dp(px) {
  return (px * deviceWidth) / DESIGN_WIDTH;
}
