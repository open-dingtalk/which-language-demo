import React from 'react';
import styles from './Admin.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class Admin extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={cx('index-admin')}>
        <div className={cx('admin')}>
          <div className={cx('admin-manager')}>
            <img src="" className={cx('admin-image')}/>
            <div className={cx('admin-hello')}></div>
          </div>
          <div className={cx('admin-edit')}>编辑分组</div>
        </div>
      </div>
    )
  }
}

export default Admin;