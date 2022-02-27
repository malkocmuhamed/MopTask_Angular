import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  @Input() question: any;
  @Input() seeMoreCommentsEvent: BehaviorSubject<number> = null;

  public answers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.seeMoreCommentsEvent.subscribe((questionId: number) => {
      // prozvati servis za question id 
    })

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
