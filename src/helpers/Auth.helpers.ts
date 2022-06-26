import decodeJWT from 'jwt-decode';

export class AuthHelper {
    static decodeAuthToken(token: string): unknown {
        const decoded = decodeJWT(token);
        return decoded;
    }
}
