import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { MdButtonModule, MdInputModule, MdCardModule, MdListModule } from '@angular/material'

import { AppComponent } from './app.component'

import { QuestionComponent } from './question.component'
import { QuestionsComponent } from './questions.component';
import { ApiService } from './api.service'

const routes = [
  {path: 'question', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent}
]

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent
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
    MdListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
