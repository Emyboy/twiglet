import { Vendor } from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants';

export class VendorService {
    static async createNewStore(data: Vendor, auth_token: string): Promise<AxiosResponse> {
        const res = await axios(API_URL + `/api/vendors`, {
            method: 'POST',
            data: {
                data,
            },
            headers: {
                authorization: `Bearer ${auth_token}`,
            },
        });
        return res.data;
    }

    static async findVendorBySubdomain(subdomain: string): Promise<AxiosResponse> {
        const res = await axios(API_URL + `/api/vendors/?subdomain=${subdomain}`);
        return res;
    }

    static async updateStore(data: unknown, vendor_id: number, auth_token: string):Promise<AxiosResponse> {
        const res = await axios(API_URL + `/api/vendors/${vendor_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${auth_token}`,
            },
            data
        });
        return res;
    }
}
