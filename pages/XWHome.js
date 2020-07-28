
import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  AppRegistry,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
//引用插件
import Swiper from 'react-native-swiper';
import { color } from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');
let cols = 3;
let hMargin = (width- 100 * cols) / (cols + 1);
let vMargin = 20;
class XWHome extends Component {
  static navigationOptions = {
    title: '轮播图',
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Swiper
            //样式
            style={styles.wrapper}
            //高度
            height={(width * 40) / 75}
            // 是否显示控制按钮（即左右两侧的箭头是否可见）
            showsButtons={true}
            //这个很主要啊，解决白屏问题
            removeClippedSubviews={false}
            // 切换时间，单位秒
            autoplayTimeout={3}
            // 是否自动轮播
            autoplay={true}
            // 如果为true，滚动方向是横向的，如果为false，滚动方向是竖向的
            horizontal={true}
            // 分页风格
            paginationStyle={styles.paginationStyle}
            // 点样式
            dotStyle={styles.dotStyle}
            // 活动点样式
            activeDotStyle={styles.activeDotStyle}>
              <View>
                <Image
                  resizeMode="cover"
                  source={require('../imgs/news1.jpg')}
                  style={styles.bannerImg}
                />
                <Text style={styles.textStyle}>    法国进入“解封”第三阶段</Text>
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  source={require('../imgs/news2.jpg')}
                  style={styles.bannerImg}
                />
                <Text style={styles.textStyle}>    北京首座气膜版“火银”核酸检测实验室</Text>
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  source={require('../imgs/news3.jpg')}
                  style={styles.bannerImg}
                />
                <Text style={styles.textStyle}>   重庆动物园为4只大熊猫庆祝1岁生日</Text>
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  source={require('../imgs/news4.jpg')}
                  style={styles.bannerImg}
                />
                <Text style={styles.textStyle}>   英巨石阵附近发现新石器时代大型竖井圈</Text>
              </View>
              <View>
                <Image
                  resizeMode="cover"
                  source={require('../imgs/news5.jpg')}
                  style={styles.bannerImg}
                />
                <Text style={styles.textStyle}>   民调显示加拿大华人受到种族主义这一“影子疫情”冲击</Text>
              </View>
          </Swiper>
        </ScrollView>
        <View style={styles.allCom}>
          {this._comItem()}
        </View>
      </View>
    );
  }
  _comItem(){
    let dataArr = [
      {name:'环球网'},{name:'中国长安网'},{name:'千龙网'},
      {name:'人民网'},{name:'中国经济网'},{name:'中华网'}
    ];
    let imgsArr = [
      require('../imgs/icon_huanqiu.png'),
      require('../imgs/icon_zhonguochangan.png'),
      require('../imgs/icon_qianlon.png'),
      require('../imgs/icon_renmin.png'),
      require('../imgs/icon_zhonguojingji.png'),
      require('../imgs/icon_zhonhua.png'),
    ];
    let itemArr = [];
    for(let i = 0; i < dataArr.length; i++){
      let dataname = dataArr[i];
      let dataimgs = imgsArr[i];
      itemArr.push(
        <View key={i} style={styles.comItem}>
          <Image source={dataimgs}
            style={{width: 75, height: 75}}
          ></Image>
          <Text style={styles.comFontStyle}>{dataname.name}</Text>
        </View>
      )
    }
    return itemArr;
  }
}
export default XWHome;

const styles = StyleSheet.create({
  comFontStyle: {
    marginTop: 5,
  },
  comItem: {
    width: 100,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hMargin,
    marginTop: vMargin,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.1)',
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  allCom: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    marginBottom: 40,
  },
  textStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: 14,
    width: width,
    height: 25,
    lineHeight: 25,
    position:'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  wrpaper: {
    width: width,
    position: 'relative',
  },
  paginationStyle: {
    bottom: 6,
  },
  dotStyle: {
    backgroundColor: '#fff',
    opacity: 0.4,
  },
  activeDotStyle: {
    backgroundColor: '#f00',
  },
  bannerImg: {
    width: width,
    height: (width * 40) / 75,
  },
});
