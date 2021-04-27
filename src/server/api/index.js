import express, { response } from 'express';
import morgan from 'morgan';
import ApiClient from '../services/apiClient';
import { getItems, getItem } from '../api/items';

export const meliClient = new ApiClient('https://api.mercadolibre.com/');

const app = express();

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/items', getItems);
app.get('/api/items/:id', getItem);

app.use('*', async (req, res) => {
  res.status(404);

  if (req.accepts('json')) {
    res.json({ error: 'Not found' }); 
  }
});

export default app;
