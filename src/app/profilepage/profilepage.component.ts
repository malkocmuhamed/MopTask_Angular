import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../_models/user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LoginComponent } from '../login/login.component';
import { UserService } from '../_services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  cardForm: FormGroup;

  constructor( 
    public dialogRef: MatDialogRef<ProfilepageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public usersService: UserService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getfirstName(){
    return this.usersService.userData.firstName;
  }
  getlastName(){
    return this.usersService.userData.lastName
  }
  getemail(){
    return this.usersService.userData.email;
  }
  
  editUser(): void {
    this.dialog.open(EditprofileComponent, {
      width: '450px', 
    });
  }

}
