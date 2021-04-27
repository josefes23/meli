/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

const IconButton = (props) => {
  const { icon, ariaLabelImg } = props;
  return (
    <button className='search-btn' {...props}>
      <div role='img' aria-label={ariaLabelImg} className={icon} />
    </button>
  );
};

IconButton.defaultProps = {
  icon: ''
};

export default IconButton;
