import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/user.model";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { Question } from '../_models/question.model';

@Injectable({ providedIn: 'root' })
export class QuestionService {

    public questions: Question[]; 

    questionUrl = environment.apiUrl + '/questions';

    constructor(
        private http: HttpClient, 
        private router: Router) {
         }

    getQuestions(){
      return this.http.get(this.questionUrl+"?_page=1&_limit=20")
        .pipe(map((res:any)=>{
            return res;
        }))
    }

    postQuestion(question: Question): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(question);
        console.log(body)
        return this.http.post(this.questionUrl, body, {'headers':headers});
    }

}