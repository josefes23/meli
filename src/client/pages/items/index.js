import React from 'react';
// eslint-disable-next-line import/named
import { currencyFormat } from '../../../server/services/utils';
import Header from '../../components/header/Header';
import Breadcrumb from '../../components/breadcrumb';
import Card from '../../components/card';

const Result = ({ items = [], word, categories = [] }) => {
  return (
    <>
      <Header value={word} />
      <main className='container'>
        <div className='row'>
          <Breadcrumb items={categories} />
        </div>
        <div className='row items-container'>
          <ol>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <Card
                    price={currencyFormat(item.price.amount)}
                    title={item.title}
                    stateName={item.state_name}
                    picture={item.picture}
                    freeShipping={item.free_shipping}
                    id={item.id}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </main>
    </>
  );
};

export default Result;
