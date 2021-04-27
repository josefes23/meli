import { apiClient } from '../index';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Item from '../../client/pages/item';

export const itemPage = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await apiClient.getJson(`api/items/${id}`).toPromise();

    const root = (
      <html lang='es'>
        <head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>MercadoLibre</title>
          <link href='/static/commons.css' type='text/css' rel='stylesheet' />
          <link href='/static/item.css' type='text/css' rel='stylesheet' />
        </head>
        <body>
          <div id='root'>
            <Item item={data.item} categories={data.categories} />
          </div>
          <script dangerouslySetInnerHTML={{ __html: `window.__item__ = ${JSON.stringify(data.item)}` }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__categories__ = ${JSON.stringify(data.categories)}`
            }}
          />
          <script src='/static/commons.js' />
          <script src='/static/item.js' />
        </body>
      </html>
    );
    const html = ReactDOMServer.renderToString(root);

    res.send(html);
  } catch (error) {
    res.status(500).send('Something broke!');
  }
};

export default itemPage;
