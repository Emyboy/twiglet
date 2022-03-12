import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants';

export class UserService {
  static async getUserByToken(auth_token: string): Promise<AxiosResponse> {
    const res = await axios(API_URL + `/api/users/me`, {
      headers: {
        authorization: `Bearer ${auth_token}`,
      },
    });
    return res;
  }

}
