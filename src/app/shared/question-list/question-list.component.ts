import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Input() questionPage: boolean = false;

  public questions: any;

  constructor() { }

  ngOnInit(): void {
    this.questions = [
      {
        id: 1,
        questionText: "TESTTESTESTEST",
        questionDate: "26.02.2022. 12:30",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 2,
        questionText: "TESTTESTESTEST",
        questionDate: "26.02.2022. 12:30",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 3,
        questionText: "TESTTESTESTEST",
        questionDate: "26.02.2022. 12:30",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 4,
        questionText: "TESTTESTESTEST",
        questionDate: "26.02.2022. 12:30",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 5,
        questionText: "TESTTESTESTEST",
        questionDate: "26.02.2022. 12:30",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 6,
        questionText: "TESTTESTESTEST",
        questionDate: "26.02.2022. 12:30",
        createdByName: "Muhamed Malkoč"
      }
    ];
  }

}
