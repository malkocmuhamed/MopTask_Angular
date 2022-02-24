import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
// import {MatSort, SortDirection} from '@angular/material/sort';
// import {merge, Observable, of as observableOf} from 'rxjs';
// import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Question } from '../_models/question.model';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from '../_services/question.service';

@Component({
  selector: 'app-homepagequestions',
  templateUrl: './homepagequestions.component.html',
  styleUrls: ['./homepagequestions.component.css']
})
export class HomepagequestionsComponent implements OnInit {

  questionData !: any;

  constructor(private http: HttpClient, public questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  
  }

  
  getQuestions(){
    this.questionService.getQuestions().subscribe(
      data=>{
        this.questionData = data;
      }
    )
  }

}
