import { apiClient } from '../index';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Items from '../../client/pages/items';

export const itemsPage = async (req, res) => {
  const { query } = req;
  try {
    const { data } = await apiClient.getJson(`api/items?q=${query.search}`).toPromise();

    const root = (
      <html lang='es'>
        <head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>MercadoLibre</title>
          <link href='/static/commons.css' type='text/css' rel='stylesheet' />
          <link href='/static/items.css' type='text/css' rel='stylesheet' />
        </head>
        <body>
          <div id='root'>
            <Items items={data.items} word={query.search} categories={data.categories} />
          </div>
          <script dangerouslySetInnerHTML={{ __html: `window.__categories__ = ${JSON.stringify(data.categories)}` }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__items__ = ${JSON.stringify(data.items)}` }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__search__ = ${JSON.stringify(query.search)}` }} />
          <script src='/static/commons.js' />
          <script src='/static/items.js' />
        </body>
      </html>
    );
    const html = ReactDOMServer.renderToString(root);

    res.send(html);
  } catch (error) {
    res.status(500).send('Something broke!');
  }
};

export default itemsPage;
