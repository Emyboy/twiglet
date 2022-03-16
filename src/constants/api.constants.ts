import { isDev } from './isDev.constants';

export const API_URL = isDev ? 'http://localhost:1337' : 'https://twigtrader-api.herokuapp.com';

// API ROLE IDs
export const VENDOR_ROLE_ID = 3;
export const AUTH_ROLE_ID=1;
export const ADMIN_ROLE_ID=4;

