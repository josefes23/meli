/* eslint-disable import/named */
import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
import { initFormatNumeral } from '../../../server/services/utils';
import Item from '.';
import '../../../assets/css/common/grid.css';
import '../../../assets/css/common/main.css';
import '../../../assets/css/header/header.css';
import '../../../assets/css/item/item.css';

initFormatNumeral();

const ItemPage = <Item categories={window.__categories__} item={window.__item__}/>;

ReactDom.hydrate(ItemPage, document.getElementById('root'));
