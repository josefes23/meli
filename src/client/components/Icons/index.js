/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import IconSvg from './icons';

export const Icon = (props) => {
  const { name } = props;
  const Ico = IconSvg[name];
  if (Ico === undefined) {
    return '';
  }
  return <Ico name={name} {...props} />;
};
