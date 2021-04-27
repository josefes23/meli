const localesBySite = new Map();
localesBySite.set('MLA', {
  locale: 'es-ar',
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  currency: {
    symbol: '$'
  }
});

export default localesBySite;
