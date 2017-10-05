import React from 'react';
import styles from './Banner.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class Banner extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={cx('banner-slider')}>
        <div className={cx('banner')}>
          <img src="https://gw.alicdn.com/tps/TB1o8BqOpXXXXanXVXXXXXXXXXX-750-300.png" className={cx('banner-image')}/>
        </div>
      </div>
    )
  }
}

export default Banner;
