import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  cardForm !: FormGroup;
  userModel = <User>{};
  
  constructor( public dialogRef: MatDialogRef<EditprofileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public usersService: UserService,
    private fb: FormBuilder) {     
     }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email, Validators.required]],
      password: [this.usersService.userData.password, Validators.required]
    } )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getid(){
    return this.usersService.userData.id;
  }

  getid1(){
    return this.userModel.id;
  }

  getpassword(){
    return this.usersService.userData.password;
  }

  // editUser(){ 
  //   this.usersService.updateUser(this.userModel, this.usersService.userData.id)
  //   .subscribe(res=>{
  //     alert("Ažurirali ste korisničke podatke!");
  //   })
  // }
}
