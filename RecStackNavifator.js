import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import XWRecommend from './pages/XWRecommend';
import XWRecDetail from './pages/XWRecDetail';

const RecRootStack = createStackNavigator(
  {
    Recommend: XWRecommend,
    RecDetail: XWRecDetail,
  },
  {
    initialRouteName: 'Recommend',
  },
);

export default RecRootStack;
