import { isDev } from './isDev.constants';

export const API_URL = isDev ? 'http://localhost:1337' : 'https://twigtrader-api.herokuapp.com';
