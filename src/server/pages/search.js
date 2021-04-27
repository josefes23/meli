import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Search from '../../client/pages/search';

export const searchPage = async (req, res) => {
  try {
    const root = (
      <html lang='es'>
        <head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>MercadoLibre</title>
          <link href='/static/commons.css' type='text/css' rel='stylesheet' />
        </head>
        <body>
          <div id='root'>
            <Search />
          </div>
          <script src='/static/commons.js' />
          <script src='/static/search.js' />
        </body>
      </html>
    );
    const html = ReactDOMServer.renderToString(root);

    res.send(html);
  } catch (error) {
    res.status(500).send('Something broke!');
  }
};

export default searchPage;
