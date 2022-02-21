import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/user.model";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

    userUrl = environment.apiUrl + '/users';

    constructor(private http: HttpClient) { }

    postUser(user: User): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(user);
        console.log(body)
        return this.http.post(this.userUrl, body, {'headers':headers});
    }

    

    // getAllUsers(): Observable<User[]> {
    //     return this.http.get<User[]>(this.userUrl);
    // }

    // deleteUser(id: number) {
    //     this.http.delete(this.userUrl + '/' + id).subscribe(data => {
    //         alert("User with ID " + id + ": Successfully removed!");
    //     });
    // }

    // getById(id: number) {
    //     return this.http.get<User>(this.userUrl + '/' + '6');
    // }

}