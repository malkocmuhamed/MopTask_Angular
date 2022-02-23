import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/user.model";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

export const AUTH_TOKEN_KEY = 'auth-token';
export const AUTH_USER_DATA = 'user-data';


@Injectable({ providedIn: 'root' })
export class UserService {

    public userData: User;
    public authToken: string |null = null;

    userUrl = environment.apiUrl + '/users';
    updateUrl = environment.apiUrl + '/users/'

    constructor(
        private http: HttpClient, 
        private router: Router) {
            this.checkStorage();
         }

    postUser(user: User): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(user);
        console.log(body)
        return this.http.post(this.userUrl, body, {'headers':headers});
    }

    updateUser(data:any, id:number){
        // const headers = { 'content-type': 'application/json'}  
        // const body=JSON.stringify(user);
        // console.log(body)
        return this.http.put(this.updateUrl+id, data)
        .pipe(map((res:any)=>{
            return res;
        }))
    }

    checkStorage(){
        const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY);
        const userData = sessionStorage.getItem(AUTH_USER_DATA);
        if (userData){
          this.userData = JSON.parse(userData) as any;
        }
        else{
          this.userData = null;
        }
      }
    
    public isLoggedIn(){
    this.authToken !== null;
    this.checkStorage();
    }

    public logout(){
    sessionStorage.clear();
    this.checkStorage();
    this.router.navigate(['/login']); 
    }

    login(authData: User){    
        sessionStorage.setItem(AUTH_TOKEN_KEY, authData.email + 'RANDOM_STRING');
        sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(authData));
        this.checkStorage();
        console.log(sessionStorage);
    }

}