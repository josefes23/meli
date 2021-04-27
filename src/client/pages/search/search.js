import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
import Search from '.';
import '../../../assets/css/common/grid.css';
import '../../../assets/css/common/main.css';
import '../../../assets/css/header/header.css';

const search = <Search />;

ReactDom.hydrate(search, document.getElementById('root'));