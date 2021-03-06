import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/user.model";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

export const AUTH_USER_DATA = 'user-data';


@Injectable({ providedIn: 'root' })
export class UserService {

    public userData: User;
    public authToken: string | null = null;

    userUrl = environment.apiUrl + '/Users';

    constructor(
        private http: HttpClient, 
        private router: Router) {
            // this.checkStorage();
         }

    postUser(user: User){
        return this.http.post(this.userUrl, user);
    }

    // updateUser(data:any, id:number){
    //     return this.http.put(this.updateUrl+id, data)
    //     .pipe(map((res:any)=>{
    //         return res;
    //     }))
    // }

    // checkStorage(){
    //     const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY);
    //     const userData = sessionStorage.getItem(AUTH_USER_DATA);
    //     this.authToken = authToken;
    //     if (userData){
    //       this.userData = JSON.parse(userData) as any;
    //     }
    //     else{
    //       this.userData = null;
    //     }
    //   }
    
    // public logout(){
    // sessionStorage.clear();
    // this.checkStorage();
    // this.router.navigate(['/homepage']); 
    // }

    // login(authData: User){    
    //     sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(authData));
    //     console.log(sessionStorage);
    // }

    public isLoggedIn(){
        return this.authToken !== null;
        }
    

}