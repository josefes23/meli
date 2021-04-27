import express from 'express';
import path from 'path';
import { searchPage, itemsPage, itemPage, notFound } from './pages';
import ApiClient from './services/apiClient';
import { initFormatNumeral } from './services/utils';
import apiApp from '../server/api';
import compression  from 'compression';

export const apiClient = new ApiClient('http://localhost:3001/');

initFormatNumeral();

const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/', searchPage);
app.get('/items', itemsPage);
app.get('/items/:id', itemPage);
app.use('*', notFound);

app.listen(3000, () => {
  console.log('Client server started: http://localhost:3000');
});

apiApp.listen(3001, () => {
  console.log('API server started: http://localhost:3001');
});
