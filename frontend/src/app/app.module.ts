import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';

import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { NavComponent } from './shared/nav.component';

import { QuizComponent } from './quiz/quiz.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent, HomeComponent, NavComponent, QuizComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
