import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants';

export class AuthService {
    static async sendOTP(token: string): Promise<AxiosResponse> {
        const res = await axios(API_URL + `/api/otps`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        return res;
    }

    static async verifyOTP(otp: string, token: string): Promise<AxiosResponse> {
        const res = await axios(API_URL + `/api/otps/verify`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
            },
            data: {
                otp
            }
        });
        return res;
    }
}
