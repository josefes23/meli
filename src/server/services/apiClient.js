import { of, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, tap } from 'rxjs/operators';
import { XMLHttpRequest } from 'xmlhttprequest';

export default class ApiClient {
  host;
  method;
  headers;

  constructor(host = '', defaultHeaders = {}) {
    this.host = host;
    this.headers = defaultHeaders;
  }

  responseMap(r) {
    return {
      data: {
        ...r.response,
        author: {
          name: 'Jose',
          lastname: 'Jurado'
        }
      }
    };
  }

  ajax(path, method, headers = {}, body = {}) {
    const url = this.host + path;
    return ajax({
      createXHR: () => new XMLHttpRequest(),
      method,
      url,
      body,
      headers: { ...this.headers, headers }
    });
  }

  getJson(path) {
    return this.ajax(path, 'GET').pipe(map(this.responseMap));
  }
}
