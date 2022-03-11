import { Vendor } from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants';

export class VendorService {
  static async createNewStore(data: Vendor, auth_token: string): Promise<AxiosResponse> {
    const res = await axios(API_URL + `/vendors`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${auth_token}`,
      },
    });
    return res;
  }
}
