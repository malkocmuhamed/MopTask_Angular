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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent
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
    NgbModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
