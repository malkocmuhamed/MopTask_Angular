import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

userModel = <User>{};
cardForm: FormGroup;

constructor(private fb: FormBuilder, private usersService: UserService) {
  this.cardForm = fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });
}

registerUser(): void {
  this.usersService.postUser(this.userModel).subscribe(
    data => {
      console.log(data);
      alert("User successfully added!");
    })
}

  ngOnInit(): void {
  }

}
