import React from 'react';
import './FullWindow.css';

export const FullWindow = ({ onExpand, onMinify }) => {
  return (
    <React.Fragment>
      <button className="full-window-btn" onClick={onExpand}>
        +
      </button>
      <button className="full-window-btn" onClick={onMinify}>
        -
      </button>
    </React.Fragment>
  )
}
