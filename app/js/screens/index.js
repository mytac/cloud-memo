import List from '../container/List';
import Detail from '../container/Detail';
import { navOptions } from './navigations';

export default {
  List: {
    screen: List,
    navigationOptions: () => navOptions(''),
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => navOptions('编辑'),
  },
};
