'use strict';

import { createElement, Component } from 'rax';
import { View } from 'weex-nuke';
import { connect } from 'rax-redux';
import AddItem from '../mods/addItem.jsx';
import List from '../mods/list.jsx';
import Profile from '../mods/profile.jsx';
import { modifyItem, addItem,fetchUserInfo } from '../redux/actions/todo.js';
import styles from './main.less';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.dispatch(fetchUserInfo());
  }
  modifyItem = (index) => {
    this.props.dispatch(modifyItem(index));
  }
  addItem = (obj) => {
    this.props.dispatch(addItem(obj));
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Profile userInfo={this.props.todoMVC.userInfo}/>
        <AddItem addItem={this.addItem} />
        <List dataSource={this.props.todoMVC} modifyItem={this.modifyItem} style={styles.list} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoMVC: state.todoReducer,
  };
}

export default connect(mapStateToProps)(Todo);
