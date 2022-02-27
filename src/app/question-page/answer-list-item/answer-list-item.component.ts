import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-list-item',
  templateUrl: './answer-list-item.component.html',
  styleUrls: ['./answer-list-item.component.css']
})
export class AnswerListItemComponent implements OnInit {
  
  @Input() question: any;

  @Input() answerListItem: any;

  public answers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.answers = [
      {
        id: 1,
        answerText: "TESTESTESTESTESTESTEST",
        createdDate: "25.02.2022. 13:50",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 1,
        answerText: "TESTESTESTESTESTESTEST",
        createdDate: "25.02.2022. 13:50",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 1,
        answerText: "TESTESTESTESTESTESTEST",
        createdDate: "25.02.2022. 13:50",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 1,
        answerText: "TESTESTESTESTESTESTEST",
        createdDate: "25.02.2022. 13:50",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 1,
        answerText: "TESTESTESTESTESTESTEST",
        createdDate: "25.02.2022. 13:50",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 1,
        answerText: "TESTESTESTESTESTESTEST",
        createdDate: "25.02.2022. 13:50",
        createdByName: "Muhamed Malkoč"
      },
      {
        id: 1,
        answerText: "TESTESTESTESTESTESTEST",
        createdDate: "25.02.2022. 13:50",
        createdByName: "Muhamed Malkoč"
      }
    ]
  }

}
