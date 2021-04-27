import numeral from 'numeral';
import localesBySite from './currency';

const mapCategories = (filters) => {
  let categories = [];

  const foundCategoryFilter = filters.find((f) => f.id === 'category');
  const values = foundCategoryFilter?.values;
  if (values) {
    const path = values.length > 0 ? values[0] : [];
    categories = path.path_from_root.map((p) => p.name);
  }
  return categories;
};

const mapResults = (results) => {
  return results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      state_name: item.address?.state_name
    };
  });
};

export const mapResponse = (res) => {
  return {
    data: {
      author: res.data.author,
      categories: mapCategories(res.data?.filters || []),
      items: mapResults(res.data?.results || [])
    }
  };
};

export const mapResponseCategory = (res) => {
  return {
    data: {
      categories: res.data.path_from_root.map((p) => p.name)
    }
  };
};

export const mapResponseItem = (res) => {
  return {
    data: {
      author: res.data.author,
      item: {
        id: res.data.id,
        title: res.data.title,
        price: {
          currency: res.data.currency_id,
          amount: res.data.price
        },
        picture: res.data.thumbnail,
        condition: res.data.condition === true ? 'Nuevo' : 'Usado',
        free_shipping: res.data.shipping?.free_shipping,
        sold_quantity: res.data.sold_quantity,
        category_id: res.data.category_id
      }
    }
  };
};

export const initFormatNumeral = (site = 'MLA') => {
  const currency = localesBySite.get(site);
  if (currency) {
    numeral.defaultFormat('$ 0,0.[00]');
    numeral.register('locale', currency.locale, currency);
    numeral.locale(currency.locale);
  }
};

export const currencyFormat = (number) => numeral(number).format();

export default {
  currencyFormat,
  initFormatNumeral
}