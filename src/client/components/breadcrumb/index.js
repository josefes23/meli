import React from 'react';
import { Icon } from '../Icons';

const Breadcrumb = ({ items = [] }) => {
  return (
    <ul className='breadcrumb'>
      {items.map((item, i) => (
        <li className='breadcrum-item' key={item} style={{ fontWeight: i === items.length - 1 ? 'bold' : 'normal' }}>
          {item}
          {i !== items.length - 1 && <Icon name='Breadcrumb' />}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
