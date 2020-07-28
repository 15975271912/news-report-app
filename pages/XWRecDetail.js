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
  require('../imgs/wz1.jpg'),
  require('../imgs/news7.jpg'),
  require('../imgs/ic2.png'),
  require('../imgs/ic3.png'),
  require('../imgs/ic4.png'),
  require('../imgs/ic5.png'),
];
let DevWidth = Dimensions.get('window').width;

class XWRecDetail extends Component {
  static navigationOptions = {
    title: '新闻详情',
  };
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
                  source={require('../imgs/wz1.jpg')}
                  style={styles.img_list}
                />
                <View style={styles.column_content}>
                  <Text style={styles.text_content1}>中国新闻网</Text>
                  <Text style={styles.text_content2}>
                    发布时间：2020-06-23 08:21:49  【编辑：翟璐】
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
                  <Image style={styles.icon} source={require('../imgs/news7.jpg')}/>
                  <Text style={styles.text_content3}>翟璐</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.grid_content3}>
              <View style={styles.scroll_item2}>
                <View style={styles.row_content}>
                  <Text style={styles.text_content4}>法国进入“解封”第三阶段 巴黎歌剧院等场所恢复开放</Text>
                </View>
                <View style={styles.column_content}>
                   <Text style={styles.text_content5}>
                   中新社巴黎6月22日电 (记者 李洋)法国当地时间22日进入“解封”第三阶段，巴黎歌剧院等场所恢复开放，中小学学生全面返校复课。
                   著名的巴黎歌剧院当天恢复开放。
                   </Text>
                    <Text style={styles.text_content5}>
                   中新社记者当天来到这里，注意到防疫措施比其他公共场所严格，要接受体温检测，同时要洗手并戴口罩才能进入。
                   </Text>
                   <Image style={styles.img_list2} source={require('../imgs/news1.jpg')}/>
                   <Text style={styles.text_content5}>
                   巴黎歌剧院的大部分内部空间均重新开放，包括恢宏的音乐厅、展览大厅以及图书馆、博物馆等。但歌剧演出等活动仍需等到9月才会陆续被安排。恢复开放首日，前来参观巴黎歌剧院的民众很少。
                   </Text>
                   <Text style={styles.text_content5}>
                   根据此前公布的第三阶段“解封”计划，在保证严格的防疫措施条件下，电影院、度假中心、赌场和游戏厅等场所22日起可以恢复营业。集体体育活动可以恢复，并根据不同类别的运动项目采取防疫措施。
                   </Text>
                   <Image style={styles.img_list2} source={require('../imgs/news7.jpg')}/>
                   <Text style={styles.text_content5}>
                   记者来到巴黎本地知名度很高的麦克斯·林代电影院，看到该电影院已经恢复开放。工作人员对记者表示，电影院目前的营业时间是从晚上8点到午夜，并限制入场人数，最好提前预订座位。该电影院恢复营业后上映的首部电影为1988年美国电影《密西西比在燃烧》，讲述美国黑人人权问题。
                   </Text>
                   <Text style={styles.text_content5}>
                   法国新冠肺炎死亡病例22日为29663例，22日单日新增确诊病例为373例；住院病例降至9693例，其中重症病例降至701例。(完)
                   </Text>
                </View>
              </View>
          </View>


        </ScrollView>
      </View>
    );
  }
  _onPressButton() {
    alert('作者界面构建中');
  }
}

export default XWRecDetail;

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
    flexDirection: 'row',
    height: 1000,
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
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    marginTop: -1,
    height: 1000,
    padding: 15,
    overflow: 'hidden',
  },
  img_list: {
    alignSelf: 'center',
    width: 65,
    height: 65,
    marginLeft: 5,
    borderRadius:50,
    borderColor:'#F0F0F0',
    borderWidth:1,
  },
  img_list2: {
      alignSelf: 'center',
      width: 370,
      height: 150,
      marginLeft: 5,
      marginTop:10,
      marginBottom:10,
      borderColor:'#F0F0F0',
      borderWidth:1,
    },
  icon: {
    width: 30,
    height: 30,
    marginRight:5,
    marginTop:-3,
    //marginBottom:'auto',
    marginLeft:5,
    borderRadius:50,
      },
  column_content:{
    marginTop: 8,
    marginLeft:0,
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
    marginLeft: 115,
    //alignItems:'center',
  },
  text_content2: {
    fontSize: 12,
    color: '#333',
    marginLeft: 40,
    marginTop: 5,
  },
  text_content4: {
      fontSize: 17,
      color: '#333',
      marginLeft: 10,
      fontWeight: 'bold',
    },
  text_content5: {
    fontSize: 15,
    color: '#333',
    marginLeft: 10,
    marginBottom:10,
  },
});
//AppRegistry.registerComponent('myPro', () => myPro);
