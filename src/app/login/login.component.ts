import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';

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
  returnUrl: string;
  error = '';
 
  constructor(
    private fb: FormBuilder, 
    private usersService: UserService, 
    private authenticationService: AuthenticationService,
    private http: HttpClient, 
    private router: Router
    ) {
    this.cardForm = fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.cardForm.controls; }

  ngOnInit(): void {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  login(){
  //   this.http.get<any>(this.usersService.userUrl)
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.cardForm.value.email &&  a.password === this.cardForm.value.password 
            
  //   });
  //   if (user) {
  //     this.usersService.login(user);
  //     console.log(user);
  //     this.router.navigate(['homepage']);
  //     this.cardForm.reset();
  //   }
  //   else {
  //     alert("Korisnik ne postoji.");
  //   }
  // })
  this.submitted = true;

  if (this.cardForm.invalid) {
      return;
  }
  this.loading = true;
  this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          (data: any) => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              this.loading = false;
          });
}

}
