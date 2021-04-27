import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const notFound = async (req, res) => {
  res.status(404);

  const root = (
    <html lang='es'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>MercadoLibre</title>
      </head>
      <body>
        <h2>Ops!!!! No encontramos la página</h2>
      </body>
    </html>
  );
  const html = ReactDOMServer.renderToString(root);

  res.send(html);
};

export default notFound;
