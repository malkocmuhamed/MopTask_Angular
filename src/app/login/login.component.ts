import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.model';

export const AUTH_TOKEN_KEY = 'auth-data';
export const AUTH_USER_DATA = 'user-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cardForm: FormGroup;
  submitted = false;
  loading = false;
 
  constructor(
    private fb: FormBuilder, 
    private usersService: UserService, 
    private http: HttpClient, 
    private router: Router
    ) {
    this.cardForm = fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(){
    this.http.get<any>(this.usersService.userUrl)
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.cardForm.value.email &&  a.password === this.cardForm.value.password 
            
    });
    if (user) {
      this.usersService.login(user);
      console.log(user);
      this.router.navigate(['homepage']);
      this.cardForm.reset();
    }
    else {
      alert("Korisnik ne postoji.");
    }
  })
}



}
