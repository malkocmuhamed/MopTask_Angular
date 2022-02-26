import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
// import {MatSort, SortDirection} from '@angular/material/sort';
// import {merge, Observable, of as observableOf} from 'rxjs';
// import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Question } from '../_models/question.model';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from '../_services/question.service';
import { UserService } from '../_services/user.service';
import { Answer } from '../_models/answer.model';

@Component({
  selector: 'app-homepagequestions',
  templateUrl: './homepagequestions.component.html',
  styleUrls: ['./homepagequestions.component.css']
})
export class HomepagequestionsComponent implements OnInit {

  questionData !: any;
  questions = <Question>{};
  answerModel = <Answer>{};
  answers: Answer[];
  answerData !: any;

  constructor(private http: HttpClient, 
    public questionService: QuestionService,
    public usersService: UserService) { }

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswers();
  }

  addAnswer(): void {
    this.questionService.postAnswers(this.answerModel).subscribe(
      data => {
        console.log(data);
        alert("Question answered!");
      })
  }


  getQuestions(){
    this.questionService.getQuestions().subscribe(
      data=>{
        console.log(data);
        this.questionData = data;
      }
    )
  }

  getAnswers(){
    this.questionService.getAnswers().subscribe(
      data=>{
        console.log(data);
        this.answerData = data;
      }
    )
  }

  changeQuestionAnswers(e): void {
    this.questions.answers = e;
  }

}
