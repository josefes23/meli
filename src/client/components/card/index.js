import React from 'react';

const Card = ({ picture, title, price, stateName, freeShipping, id }) => {
  return (
    <div className='card-item-container'>
      <div className='card-item-img'>
        <a href={`/items/${id}`}>
          <img src={picture} className='image-item' alt={title} />
        </a>
      </div>
      <div className='card-item-description'>
        <div className='card-item-price'>
          <div>{price}</div>
          {freeShipping && <div className='card-img-shipping' />}
        </div>
        <div className='card-item-tile'>
          <a href={`/items/${id}`}>{title}</a>
        </div>
      </div>
      <div className='card-item-state'>{stateName}</div>
    </div>
  );
};

export default Card;
