import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/user.model";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { Question } from '../_models/question.model';
import { Answer } from '../_models/answer.model';

@Injectable({ providedIn: 'root' })
export class QuestionService {

    questionUrl = environment.apiUrl + '/questions';
    answerUrl =   environment.apiUrl + '/answers';

    constructor(
        private http: HttpClient, 
        private router: Router) {
         }

    // getQuestions(){
    //   return this.http.get(this.questionUrl+"?_page=1&_limit=20")
    //     .pipe(map((res:any)=>{
    //         return res;
    //     }))
    // }

    getQuestions(): Observable<Question[]>{
        return this.http.get<Question[]>(this.questionUrl+"?_page=1&_limit=20")
          .pipe(map((res:any)=>{
              return res;
          }))
      }

    getAnswers(): Observable<Answer[]>{
        return this.http.get<Answer[]>(this.answerUrl)
          .pipe(map((res:any)=>{
              return res;
          }))
      }

    postQuestion(question: Question): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(question);
        console.log(body);
        return this.http.post(this.questionUrl, body, {'headers':headers});
    }

    postAnswers(answer: Answer): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(answer);
        console.log(body);
        return this.http.post(this.answerUrl, body, {'headers':headers});
    }

    // postQuestion(question: Question): Observable<any> {
    //     const headers = { 'content-type': 'application/json'}  
    //     const body=JSON.stringify(question);
    //     console.log(body);
    //     return this.http.post(this.questionUrl, body, {'headers':headers});
    // }


}