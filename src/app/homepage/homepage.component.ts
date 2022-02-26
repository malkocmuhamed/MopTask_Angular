import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomepagequestionsComponent } from '../homepagequestions/homepagequestions.component';
import { Question } from '../_models/question.model';
import { QuestionService } from '../_services/question.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  questionModel = <Question>{};
  public questions: Question[];

  constructor(
    public usersService: UserService,
    public questionService: QuestionService) { }

  ngOnInit(): void {
  }

  addQuestion(): void {
    this.questionService.postQuestion(this.questionModel).subscribe(
      data => {
        console.log(data);
        alert("Question has been posted!");
      })
  }

  getQuestions(){
    this.questionService.getQuestions().subscribe(
      data=>{
        this.questions = data;
      }
    )
  }


}
