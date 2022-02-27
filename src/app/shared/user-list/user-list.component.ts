import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        fullName: "Muhamed Malkoč",
        questionsCount: 5
      },
      {
        fullName: "Muhamed Malkoč",
        questionsCount: 5
      },
      {
        fullName: "Muhamed Malkoč",
        questionsCount: 5
      },
      {
        fullName: "Muhamed Malkoč",
        questionsCount: 5
      },
      {
        fullName: "Muhamed Malkoč",
        questionsCount: 5
      },
      {
        fullName: "Muhamed Malkoč",
        questionsCount: 5
      },
      {
        fullName: "Muhamed Malkoč",
        questionsCount: 5
      },
      {
        fullName: "Muhamed Malkoč",
        questionsCount: 5
      }
    ]
  }

}
