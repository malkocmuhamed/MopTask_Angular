import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfilepageComponent } from '../profilepage/profilepage.component';
import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public users: User[];
  constructor(public dialog: MatDialog, 
    public usersService: UserService,
    private authenticationService: AuthenticationService) { }
   
   public user: User;

  ngOnInit() {
    this.authenticationService
    .getLoggedInUserData()
    .subscribe(user => {
        this.user = user;
    });
  } 

  // isLoggedIn(){
  //   return this.usersService.isLoggedIn();
  // }

  viewUser(): void {
    this.dialog.open(ProfilepageComponent, {
      width: '450px',
      data: {   
        name: 'muhamed'
      }   
    });
  }

  getusername(){
    return this.usersService.userData.firstName;
  }
 
  logout(){
    this.authenticationService.logout();
  }
  
}
