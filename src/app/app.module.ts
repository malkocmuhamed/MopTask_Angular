import { Input, NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
// MDB Angular Free
import { CheckboxModule } from 'angular-bootstrap-md'
import { WavesModule} from 'angular-bootstrap-md'
import { ButtonsModule } from 'angular-bootstrap-md'
import { InputsModule } from 'angular-bootstrap-md'
import {IconsModule } from 'angular-bootstrap-md'
import { CardsModule } from 'angular-bootstrap-md'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomepagequestionsComponent } from './homepagequestions/homepagequestions.component';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { QuestionListComponent } from './shared/question-list/question-list.component';
import { QuestionListItemComponent } from './shared/question-list-item/question-list-item.component';
import { UserListComponent } from './shared/user-list/user-list.component';
import { UserListItemComponent } from './shared/user-list-item/user-list-item.component';
import { HomepageUsersComponent } from './shared/homepage-users/homepage-users.component';
import { HomepageHotQuestionsComponent } from './shared/homepage-hot-questions/homepage-hot-questions.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { AnswerListComponent } from './question-page/answer-list/answer-list.component';
import { AnswerListItemComponent } from './question-page/answer-list-item/answer-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent,
    ProfilepageComponent,
    EditprofileComponent,
    HomepagequestionsComponent,
    QuestionListComponent,
    QuestionListItemComponent,
    UserListComponent,
    UserListItemComponent,
    HomepageUsersComponent,
    HomepageHotQuestionsComponent,
    QuestionPageComponent,
    AnswerListComponent,
    AnswerListItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    CardsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
