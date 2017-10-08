import React from 'react';
import styles from './Admin.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class Admin extends React.Component{
  constructor(props){
    super(props)
  }

  updateName(){
    const dateTime = new Date().getHours();
    const { name, isAdmin } = this.props.userInfo;
    if(name){
      if (dateTime >= 5 && dateTime <= 12) {
        return {
          wh: isAdmin ? '早上好，管理员，' + name : '早上好，' + name,
          whImage: 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg'
        }
      } else if (dateTime > 12 && dateTime <= 18) {
        return {
          wh: isAdmin ? '下午好，管理员，' + name : '下午好，' + name,
          whImage: 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg'
        }
      } else {
        return {
          wh: isAdmin ? '晚上好，管理员，' + name : '晚上好，' + name,
          whImage: 'https://gw.alicdn.com/tps/TB15FNwOFXXXXbqXXXXXXXXXXXX-36-36.jpg'
        }
      }
    } else {
      return {};
    }
  }

  render(){
    const infos = this.updateName();
    const { wh, whImage } = infos;
    return(
      <div className={cx('index-admin')}>
        <div className={cx('admin')}>
          <div className={cx('admin-manager')}>
            <img src={ whImage } className={cx('admin-image')}/>
            <div className={cx('admin-hello')}>
              { wh }
            </div>
          </div>
          <div className={cx('admin-edit')}>编辑分组</div>
        </div>
      </div>
    )
  }
}

export default Admin;