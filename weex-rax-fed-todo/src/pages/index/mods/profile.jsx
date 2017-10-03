import { createElement, Component } from 'rax';
import { View, Text,Image } from 'weex-nuke';
import styles from './profile.less';

class Profile extends Component{

  render(){
    const { name, avatar} = this.props.userInfo;
    return(
      <View style={styles.app_users}>
        <View style={styles.app_users_con}>
          <View style={styles.app_users_image_box}>
            <Image style={styles.app_users_image} src={avatar}></Image>
          </View>
          <View style={styles.app_users_name_box}>
            <Text style={styles.app_users_name}>{ name }</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;