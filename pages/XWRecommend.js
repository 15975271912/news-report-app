import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  AppRegistry,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

let img = [
  require('../imgs/news1.jpg'),
  require('../imgs/news2.jpg'),
  require('../imgs/news3.jpg'),
  require('../imgs/news4.jpg'),
  require('../imgs/news5.jpg'),
  require('../imgs/news6.jpg'),
];
let DevWidth = Dimensions.get('window').width;

export default class XWRecommend extends Component {
  static navigationOptions = {
    title: '新闻推荐',
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.grid_content}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('RecDetail')}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item}>
                <Image
                  source={require('../imgs/news1.jpg')}
                  style={styles.img_list}
                />
                <View style={styles.column_content}>
                  <Text style={styles.text_content1}>
                  法国进入“解封”第三阶段 巴黎歌剧院等场所恢复开放
                  </Text>
                  <Text style={styles.text_content2}>
                    当地时间6月22日，著名的巴黎歌剧院恢复开发，大部分内部空间都准许入内，包括恢弘的音乐厅、展览大厅以及图书馆、博物馆等。
                  </Text>
                  <Text style={styles.text_content3}>中国新闻网</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.grid_content}>
            <TouchableHighlight
              onPress={this._onPressButton}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item}>
                <Image
                  source={require('../imgs/news2.jpg')}
                  style={styles.img_list}
                />
                <View style={styles.column_content}>
                  <Text style={styles.text_content1}>
                  探访北京首座气膜版“火眼”核酸检测实验室
                  </Text>
                  <Text style={styles.text_content2}>
                    出于北京市疫情防控工作的需要，北京大兴区体育中心综合馆内正在搭建一个可移动、自动化、大通量的核酸检测实验室。
                  </Text>
                  <Text style={styles.text_content3}>中国新闻网</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.grid_content}>
            <TouchableHighlight
              onPress={this._onPressButton}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item}>
                <Image
                  source={require('../imgs/news3.jpg')}
                  style={styles.img_list}
                />
                <View style={styles.column_content}>
                  <Text style={styles.text_content1}>重庆动物园为4只大熊猫庆祝1岁生日</Text>
                  <Text style={styles.text_content2}>
                    6月23日，重庆动物园的4只大熊猫宝宝“双双”“重重”“喜喜”“庆庆”迎来了它们的1岁生日，工作人员为他们精心准备了礼物。
                  </Text>
                  <Text style={styles.text_content3}>中国新闻网</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.grid_content}>
            <TouchableHighlight
              onPress={this._onPressButton}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item}>
                <Image
                  source={require('../imgs/news4.jpg')}
                  style={styles.img_list}
                />
                <View style={styles.column_content}>
                  <Text style={styles.text_content1}>中国发射北斗三号全球卫星导航系统最后一颗组网卫星</Text>
                  <Text style={styles.text_content2}>
                    中国在西昌卫星发射中心用长征三号乙运载火箭，成功发射北斗系统第55颗导航卫星暨北斗三号最后一颗全球组网卫星。
                  </Text>
                  <Text style={styles.text_content3}>中国新闻网</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.grid_content}>
            <TouchableHighlight
              onPress={this._onPressButton}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item}>
                <Image
                  source={require('../imgs/news5.jpg')}
                  style={styles.img_list}
                />
                <View style={styles.column_content}>
                  <Text style={styles.text_content1}>英巨石阵附近发现新石器时代大型竖井圈</Text>
                  <Text style={styles.text_content2}>
                   据外媒报道，在英国英格兰西南部的巨石阵附近，发现了拥有至少4500年历史的大型竖井圈遗迹，这可能是英国最大的史前构造……
                  </Text>
                  <Text style={styles.text_content3}>中国新闻网</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.grid_content}>
            <TouchableHighlight
              onPress={this._onPressButton}
              style={{flex: 1}}
              underlayColor="#fff">
              <View style={styles.scroll_item}>
                <Image
                  source={require('../imgs/news6.jpg')}
                  style={styles.img_list}
                />
                <View style={styles.column_content}>
                  <Text style={styles.text_content1}>民调显示加拿大华人受到种族主义这一“影子疫情”冲击</Text>
                  <Text style={styles.text_content2}>
                    加拿大民调机构6月22日公布的一项调查显示，加拿大华人正在新冠疫情下承受种族主义这一“影子疫情”带来的冲击。
                  </Text>
                  <Text style={styles.text_content3}>中国新闻网</Text>
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  grid_content: {
    flexDirection: 'column',
    height: 300,
    backgroundColor:'#EFEFEF',
  },
  scroll_item: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    height: 300,
    marginBottom: 10,
    overflow: 'hidden',
  },
  img_list: {
    alignSelf: 'center',
    height: 200,
    marginLeft:5,
  },
  column_content: {
    marginLeft: 10,
    marginTop: 5,
  },
  text_content1: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
    alignSelf:'center',
  },
  text_content2: {
    fontSize: 13,
    color: '#333',
    marginTop: 3,
  },
  text_content3: {
    fontSize: 12,
    color: '#E86411',
    marginLeft: 330,
    marginTop: 3,
  },
});
//AppRegistry.registerComponent('myPro', () => myPro);
