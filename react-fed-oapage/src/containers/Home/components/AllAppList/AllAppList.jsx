import React from 'react';
import styles from './AllAppList.scss';
import classnames from 'classnames/bind';
import ALLAPPLISTMOCKDATA from './ALLAPPLISTMOCKDATA'

const cx = classnames.bind(styles);

class AllAppList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className={cx('index-all-applist')}>
        <div className={cx('applist-title')}>
          <h1 className={cx('applist-text')}>全部应用</h1>
        </div>
        <div className={cx('grid')}>
          {
            ALLAPPLISTMOCKDATA.map((v) => {
              return (
                <div className={cx('cell')}>
                  <div className={cx('cell-box')}>
                    <div className={cx('cell-image-container')}>
                      <img src={v.icon} className={cx('cell-image')} />
                    </div>
                    <div className={cx('cell-text')}>{v.name}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default AllAppList;