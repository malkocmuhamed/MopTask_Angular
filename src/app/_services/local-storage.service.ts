import { Injectable } from '@angular/core';
import { IdentityServerToken } from '../_models/identity-server-token.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    constructor() { }

    getAccessToken() {
        return localStorage.getItem('quizapp.accessToken');
    }

    getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    setAccessToken(identityServerToken: IdentityServerToken) {
        localStorage.setItem('moptask.accessToken', identityServerToken.accessToken);
        localStorage.setItem('moptask.tokenType', identityServerToken.tokenType);
        localStorage.setItem('moptask.tokenExpiresIn', identityServerToken.expiresIn);
        localStorage.setItem('moptask.refreshToken', identityServerToken.refreshToken);
    }

    removeAccessToken() {
        localStorage.removeItem('moptask.accessToken');
        localStorage.removeItem('moptask.tokenType');
        localStorage.removeItem('moptask.tokenExpiresIn');
        localStorage.removeItem('moptask.refreshToken');
    }
}