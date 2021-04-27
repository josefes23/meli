/* eslint-disable import/named */
import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
import Result from '.';
import '../../../assets/css/common/grid.css';
import '../../../assets/css/common/main.css';
import '../../../assets/css/items/items.css';
import '../../../assets/css/header/header.css';
import { initFormatNumeral } from '../../../server/services/utils';

initFormatNumeral();

const result = <Result items={window.__items__} word={window.__search__} categories={window.__categories__} />;

ReactDom.hydrate(result, document.getElementById('root'));
