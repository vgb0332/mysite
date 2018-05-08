import React from 'react';
import styles from './ViewerTemplate.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const ViewerTemplate = ( { viewer, spaceNaviator }) => {
  return (
    <div className={cx('viewer-template')}>
      <header>
        {"Astronomy Picture of the Day"}
      </header>
      <div className={cx('viewer-wrapper')}>
          {viewer}
          <div className={cx('space-navigator-wrapper')}>
            {spaceNaviator}
          </div>
      </div>
    </div>
  );
}

// export default ViewerTemplate;
