import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    authUrl = `${environment.apiUrl}auth`;

    async login(username:string, password:string) {
        try {
            const data = {
                username,
                password
            };

            const res = await axios.post(this.authUrl, data);
            return res;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}