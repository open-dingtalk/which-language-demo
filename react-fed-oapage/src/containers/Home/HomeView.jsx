import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './flow/homeActions.js';
import styles from './HomeView.scss';
import classnames from 'classnames/bind';
import Banner from './components/Banner';
import Admin from './components/Admin';
import Manager from './components/Manager';
import AllAppList from './components/AllAppList';
import UserList from './components/UserList';

const cx = classnames.bind(styles);

const defaultProps = {
  home: {
    name: '',
    asyncName: '',
    userInfo: {}
  }
};

const propTypes = {
  home: PropTypes.object
};

class HomeView extends PureComponent{
  
  constructor(props){
    super(props);
    console.log(this)
  }
  
  componentWillReceiveProps(nextProps){

  }

  componentDidMount(){
    this.props.getDefault({'name':'wower'});
    this.props.getAsyncDefault({'name':'icepy'});
    this.props.fetchJSAPIOAuth();
    this.props.fetchUserInfo();
  }

  render(){
    const { name,asyncName,userInfo } = this.props.home;
    return (
      <div className={ cx('icepy') }>
        <Banner />
        <Admin userInfo={ userInfo }/>
        <UserList />
        <AllAppList />
        <Manager />
      </div>
    )
  }
}

HomeView.propTypes = propTypes;
HomeView.defaultProps = defaultProps;

const mapState = ({ home }) => {
  return {
    home
  }
}

export default connect(mapState,actions)(HomeView);