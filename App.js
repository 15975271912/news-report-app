import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import 'react-native-gesture-handler';
import MainTabNavigation from './MainTabNavigator';
import Login from './pages/Login';
import XWMine from './pages/XWMine';

const RootStack = createSwitchNavigator({
  Login: Login,
  Home: MainTabNavigation,
  Mine: XWMine,
});

const AppContainer = createAppContainer(RootStack);
export default AppContainer;