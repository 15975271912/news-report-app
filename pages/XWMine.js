import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  AppRegistry,
  AsyncStorage,
  Dimensions,
  BackHandler,
  TouchableHighlight,
} from 'react-native';

let img = [
  require('../imgs/news1.jpg'),
  require('../imgs/ic1.png'),
  require('../imgs/ic2.png'),
  require('../imgs/ic3.png'),
  require('../imgs/ic4.png'),
  require('../imgs/ic5.png'),
];
let DevWidth = Dimensions.get('window').width;

class XWMine extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.grid_content1}>
            <TouchableHighlight
              onPress={this._onPressButton}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item1}>
                <Image
                  source={require('../imgs/news1.jpg')}
                  style={styles.img_list}
                />
                <View style={styles.column_content}>
                  <Text style={styles.text_content1}>蕉下客中客</Text>
                  <Text style={styles.text_content2}>
                    简介：书中自有颜如玉，书中自有黄金屋
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.grid_content2}>
            <TouchableHighlight
              onPress={this._onPressButton}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item}>
                <View style={styles.row_content}>
                  <Image style={styles.icon} source={require('../imgs/ic1.png')}/>
                  <Text style={styles.text_content3}>我的账户</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.grid_content2}>
            <TouchableHighlight onPress={this._onPressButton}
            style={{flex: 1}} underlayColor="#fff">
              <View style={styles.scroll_item}>
                <View style={styles.row_content}>
                <Image style={styles.icon} source={require('../imgs/ic2.png')}/>
                  <Text style={styles.text_content3}>我的收藏</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.grid_content2}>
            <TouchableHighlight onPress={this._onPressButton}
            style={{flex: 1}} underlayColor="#fff">
              <View style={styles.scroll_item}>
                <View style={styles.row_content}>
                <Image style={styles.icon} source={require('../imgs/ic3.png')}/>
                  <Text style={styles.text_content3}>我的点赞</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.grid_content2}>
            <TouchableHighlight onPress={this._onPressButton}
             style={{flex: 1}} underlayColor="#fff">
              <View style={styles.scroll_item}>
                <View style={styles.row_content}>
                <Image style={styles.icon} source={require('../imgs/ic4.png')}/>
                  <Text style={styles.text_content3}>设置</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.grid_content2}>
            <TouchableHighlight onPress={this._onPressButton}
             style={{flex: 1}} underlayColor="#fff">
              <View style={styles.scroll_item}>
                <View style={styles.row_content}>
                <Image style={styles.icon} source={require('../imgs/ic5.png')}/>
                  <Text style={styles.text_content3}>帮助和反馈</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.grid_content3}>
            <TouchableHighlight
              onPress={() => BackHandler.exitApp()}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item2}>
                <View style={styles.row_content2}>
                  <Text style={styles.button_content}>退出应用</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
  _onPressButton() {
    alert('界面构建中');
  };
  // _clearApp = async () => {
  //   await AsyncStorage.clear();
  //   // this.props.navigation.navigate("Login");
  //   this.props.navigation.goBack();
  // };
}

export default XWMine;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'white',
  },
  grid_content1: {
    flexDirection: 'row',
    height: 150,
    //backgroundColor:'red',
  },
  grid_content2: {
    flexDirection: 'row',
    height: 60,
  },
  grid_content3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll_item1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    //flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    height: 100,
    padding: 15,
    overflow: 'hidden',
  },
  scroll_item: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    marginTop: -1,
    height: 60,
    padding: 15,
    overflow: 'hidden',
  },
  scroll_item2: {
    flex: 1,
    flexDirection: 'row',
    borderRadius:50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#FF5E56',
    marginTop: 25,
    marginLeft: 20,
    height: 45,
    width: 280,
    padding: 15,
    overflow: 'hidden',
  },
  img_list: {
    alignSelf: 'center',
    width: 65,
    height: 65,
    marginLeft: 5,
    borderRadius:50,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight:5,
    marginTop:-3,
    //marginBottom:'auto',
    marginLeft:5,
      },
  column_content:{
    marginTop: 13,
    marginLeft:-20,
  },
  row_content: {
    flexDirection: 'row',
    marginTop: 3,
  },
  row_content2: {
    marginTop: -6,
  },
  text_content3: {
    fontSize: 17,
    color: '#333',
    marginLeft: 10,
  },
  text_content1: {
    fontSize: 17,
    color: '#333',
    marginLeft: 100,
    //alignItems:'center',
  },
  text_content2: {
    fontSize: 12,
    color: '#333',
    marginLeft: 45,
    marginTop: 5,
  },
  button_content: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 85,
  },
});
//AppRegistry.registerComponent('myPro', () => myPro);

