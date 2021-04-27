/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

const PrimaryButton = (props) => {
  const { text } = props;
  return (
    <button className='item-button' {...props}>
      {text}
    </button>
  );
};

export default PrimaryButton;
