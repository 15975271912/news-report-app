import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

import XWHome from './pages/XWHome';
import RecRootStack from './RecStackNavifator';
import XWMine from './pages/XWMine';
import XWRecommend from './pages/XWRecommend';
// import XWRecDetail from './pages/XWRecDetail';

const SELECTED_TITLE = '主页';
const SELECTED_NORMAL = require('./imgs/iconfont-home.png');
const SELECTED_FOCUS = require('./imgs/iconfont-home-active.png');

const EXPLORE_TITLE = '推荐';
const EXPLORE_NORMAL = require('./imgs/iconfont-list.png');
const EXPLORE_FOCUS = require('./imgs/iconfont-list-active.png');

const PROFILE_TITLE = '我的';
const PROFILE_NORMAL = require('./imgs/iconfont-user.png');
const PROFILE_FOCUS = require('./imgs/iconfont-user-active.png');

// 底部导航
const TABS = {
  XWHome: {
    screen: XWHome,
    navigationOptions: {
      tabBarLabel: SELECTED_TITLE,
      tabBarIcon: ({focused}) => {
        if (!focused) {
          return (
            <Image
              source={SELECTED_NORMAL}
              style={styles.bottomTabIconsStyle}
            />
          );
        } else {
          return (
            <Image source={SELECTED_FOCUS} style={styles.bottomTabIconsStyle} />
          );
        }
      },
    },
  },
  XWRecommend: {
    screen: RecRootStack,
    navigationOptions: {
      tabBarLabel: EXPLORE_TITLE,
      tabBarIcon: ({focused}) => {
        if (!focused) {
          return (
            <Image source={EXPLORE_NORMAL} style={styles.bottomTabIconsStyle} />
          );
        } else {
          return (
            <Image source={EXPLORE_FOCUS} style={styles.bottomTabIconsStyle} />
          );
        }
      },
    },
  },
  XWMine: {
    screen: XWMine,
    navigationOptions: {
      tabBarLabel: PROFILE_TITLE,
      tabBarIcon: ({focused}) => {
        if (!focused) {
          return (
            <Image source={PROFILE_NORMAL} style={styles.bottomTabIconsStyle} />
          );
        } else {
          return (
            <Image source={PROFILE_FOCUS} style={styles.bottomTabIconsStyle} />
          );
        }
      },
    },
  },
};

class MainTabNavigator extends Component {
  _tabNavigator() {
    const {XWHome, XWRecommend, XWMine} = TABS;
    const tabs = {XWHome, XWRecommend, XWMine};
    if (!this.tabNavigator) {
      this.tabNavigator = createAppContainer(
        createBottomTabNavigator(tabs, {
          tabBarComponent: props => (
            <BottomTabBar {...props} activeTintColor="rgb(51,51,51)" />
          ),
        }),
      );
    }
    return this.tabNavigator;
  }

  render() {
    const TabNavigator = this._tabNavigator();
    return <TabNavigator />;
  }
}

const styles = StyleSheet.create({
  bottomTabIconsStyle: {
    width: 30,
    height: 30,
  },
});

export default MainTabNavigator;
