import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants';

export class AuthService {
    static async verifyOTP(otp: string, token: string): Promise<AxiosResponse> {
        const res = await axios(API_URL + `/api/otp/verify`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        return res;
    }
}
