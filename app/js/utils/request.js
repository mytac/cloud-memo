import axios from 'axios';
import createError from './createError';
import { getServerUrl } from './localStorage';


export default function request(url, body) {
  return getServerUrl().then(serverUrl => axios
    .post(`http://${serverUrl}${url}`, body)
    .then(response => response.data)
    .then((response) => {
      if (response.status === 1) throw createError(response.code);
      return response.body || {};
    })
    .catch((error) => {
      if (error instanceof SyntaxError) {
        throw createError('SYNTAX_JSON');
      }
      /* eslint-disable no-console */
      console.log(error);
      throw createError('ERROR');
    }));
}
