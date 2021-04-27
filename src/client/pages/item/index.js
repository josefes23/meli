import React from 'react';
// eslint-disable-next-line import/named
import { currencyFormat } from '../../../server/services/utils';
import Breadcrumb from '../../components/breadcrumb';
import Header from '../../components/header/Header';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const Item = ({ item = {}, categories = [] }) => {
  return (
    <>
      <Header />
      <main className='container'>
        <div className='row justify-content-center no-gutters'>
          <div className='col-12'>
            <Breadcrumb items={categories} />
          </div>
        </div>
        <div className='row justify-content-center no-gutters item-container'>
          <div className='col-12'>
            <div className='row'>
              <div className='col item-description'>
                <img src={item.picture} alt='item'/>
                <div className='row'>
                  <div className='col'>
                    <div className='item-description-title'>Descripción del producto</div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              <div className='col col-lg-3'>
                <div className='item-info-container'>
                  <div className='item-sold'>
                    {item.condition} - {item.sold_quantity} vendidos
                  </div>
                  <div className='item-title'>{item.title}</div>
                  <div className='item-price'>{currencyFormat(item.price.amount)}</div>
                  <PrimaryButton text='Comprar' type='submit' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Item;
