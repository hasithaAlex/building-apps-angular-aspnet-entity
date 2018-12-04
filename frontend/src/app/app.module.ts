import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { 
  MdButtonModule, 
  MdInputModule, 
  MdCardModule, 
  MdListModule,
  MdToolbarModule 
} from '@angular/material'

import { AppComponent } from './app.component'

import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from "./nav.component";
import { QuizComponent } from './quiz.component';
import { ApiService } from './api.service'

const routes = [
  {path: '', component:HomeComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'quiz', component: QuizComponent}

]

@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent, 
    QuestionsComponent, 
    HomeComponent, 
    NavComponent, 
    QuizComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule, 
    MdButtonModule, 
    MdInputModule ,
    MdCardModule,
    MdListModule,
    MdToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
