import { map } from 'rxjs/operators';
import { meliClient } from './index';
import { mapResponse, mapResponseCategory, mapResponseItem } from '../services/utils';

export const getItems = async (req, res, next) => {
  const { q } = req.query;
  try {
    const { data } = await meliClient.getJson(`sites/MLA/search?q=${q}&limit=4`).pipe(map(mapResponse)).toPromise();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await meliClient.getJson(`items/${id}`).pipe(map(mapResponseItem)).toPromise();
    const responseDescription = await meliClient.getJson(`items/${id}/description`).toPromise();
    const responseCategory = await meliClient
      .getJson(`categories/${response.data.item.category_id}`)
      .pipe(map(mapResponseCategory))
      .toPromise();
    const data = {
      author: response.data.author,
      item: {
        ...response.data.item,
        description: responseDescription.data.plain_text
      },
      categories: responseCategory.data.categories
    };
    res.json(data);
  } catch (err) {
    next(err);
  }
};
