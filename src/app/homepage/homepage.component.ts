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

  constructor(public dialog: MatDialog, 
    public usersService: UserService,
    public questionService: QuestionService) { }

  openDialog1() {
    const dialogRef = this.dialog.open(HomepagequestionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

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
