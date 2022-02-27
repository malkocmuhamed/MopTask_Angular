import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.css']
})
export class QuestionListItemComponent implements OnInit {

  public seeMoreCommentsEvent: BehaviorSubject<number>;

  @Input() questionListItem: any;
  @Input() questionPage: boolean = false;

  constructor() { }

  ngOnInit(): void {

    
  }

  thumbsUpClick() {

  }

  

  seeMoreComments() {
    this.seeMoreCommentsEvent.next(this.questionListItem.id);
  }

}
