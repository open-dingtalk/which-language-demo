import React from 'react';
import styles from './Manager.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class Manager extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={cx('add-manager')}>
        <div className={cx('add-manager-container')}>
          <img src="https://gw.alicdn.com/tps/TB1O.peOFXXXXbvXpXXXXXXXXXX-42-42.png" className={cx('add-manager-add-icon')} />
          <div className={cx('add-manager-text')}>添加/管理</div>
          <img src="https://gw.alicdn.com/tps/TB12pIZOpXXXXaxXVXXXXXXXXXX-16-28.jpg" className={cx('add-manager-more-icon')} />
        </div>
      </div>
    )
  }
}

export default Manager;