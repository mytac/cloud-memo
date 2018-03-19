import axios from 'axios';
import createError from './createError';

export default function request(url, body) {
  return axios
    .post(`http://192.168.10.248:8888${url}`, body)
    .then(response => response.data)
    .then((response) => {
      if (response.status === 1) throw createError(response.code);
      return response.body || {};
    })
    .catch((error) => {
      if (error instanceof SyntaxError) {
        throw createError('SYNTAX_JSON');
      }
      // JSON解析错误
      /* eslint-disable no-console */
      console.log(error);
      throw createError('ERROR');
    });
}
