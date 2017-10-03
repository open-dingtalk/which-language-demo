'use strict';

import { createElement, Component } from 'rax';
import { Provider } from 'rax-redux';
import dingtalk from 'dingtalk-javascript-sdk';
import reducers from './redux/reducers/index.js';
import createStore from './redux/store/index.js';
import Todo from './container/main.jsx';

const store = createStore(reducers);
class ReduxPage extends Component {
  componentWillMount() {
    dingtalk.ready(() => {
      const dd = dingtalk.apis;
      dd.biz.navigation.setTitle({
        title: '待办列表',
      });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
export default ReduxPage;
