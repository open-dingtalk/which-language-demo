import React from 'react';
import styles from './UserList.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class UserList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={cx('index-userlist')}>
        <div className={cx('index-userlist-item')}>
          <div className={cx('index-title')}>
            <div className={cx('index-text')}>门店运营</div>
          </div>
          <div className={cx('grid')}>
            <div className={cx('cell')}>
              <div className={cx('cell-box')}>
                <div className={cx('cell-image-container')}>
                  <img src="https://landray.dingtalkapps.com/alid/app/report/images/ico-png/25.png" className={cx('cell-image')} />
                  <div className={cx('cell-app-type-container')}>
                    <div className={cx('cell-app-type')}>日志</div>
                  </div>
                </div>
                <div className={cx('cell-text')}>营业日报</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;