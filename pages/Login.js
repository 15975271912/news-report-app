import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  Alert,
} from 'react-native';
// import LoginData from './data/LoginData.json';

class Login extends React.Component {
  // 设置头部导航栏的相关内容
  static navigationOptions = {
    // 隐藏登录界面的header标题
    header: null,
  };
  // 设置虚拟机
  constructor(props) {
    super(props);
    this.state = {
      inputedNum: '',
      inputedPW: '',
    };
    this.updateNum = this.updateNum.bind(this);
    this.jumpToWaiting = this.jumpToWaiting.bind(this);
  }
  updateNum(newText) {
    this.setState(state => {
      return {
        inputedNum: newText,
      };
    });
  }
  updatePW(newText) {
    this.setState(() => {
      return {
        inputedPW: newText,
      };
    });
  }
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../imgs/background.jpeg')}>
        <View style={styles.contanier}>
          <Text style={styles.text}>优质新闻推送App</Text>
          <TextInput
            style={styles.textinput}
            placeholder="请输入手机号"
            androidinlineImageLeft="phone"
            onChangeText={this.updateNum}
            // value={this.state.text}
          />
          <TextInput
            style={styles.textinput}
            placeholder="请输入密码"
            secureTextEntry={true}
            androidinlineImageLeft="password"
            onChangeText={this.updatePW.bind(this)}
            // value={this.state.text}
          />
          <Text style={styles.loginButton} onPress={() => this.login()}>
            登录
          </Text>
        </View>
      </ImageBackground>
    );
  }
  login() {
    Alert.alert('提示', '确定使用' + this.state.inputedNum + '号码登录吗？', [
      {text: '取消', onPress: () => {}, style: 'cancel'}, //按下取消无操作
      {text: '确定', onPress: this.jumpToWaiting},
      ,
    ]);
  }
  jumpToWaiting() {
    const LoginData = [{
      phone: "15022331122",
      password: "123456",
    },{
      phone:"17001122344",
      password:"12345"
    },{
      phone:"12200001111",
      password:"1234"
    }];
    for (var i = 0; i < LoginData.length; i++) {
      if (
        this.state.inputedNum === LoginData[i].phone &&
        this.state.inputedPW === LoginData[i].password
      ) {
        this.props.navigation.navigate('Home');
        return;
      }
    }
    alert('用户名或密码错误');
  }
}

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  contanier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  textinput: {
    height: 40,
    width: 220,
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginBottom: 20,
    borderRadius: 5,
  },
  icoImg: {
    width: 30,
    height: 30,
  },
  loginButton: {
    height: 40,
    width: 150,
    backgroundColor: '#40E0D0',
    borderRadius: 30,
    color: 'white',
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
