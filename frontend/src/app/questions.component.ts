import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent implements OnInit {
    constructor(private api: ApiService) { }

    questionList = {};

    ngOnInit() {
      this.api.getQuestions().subscribe(res => {
        this.questionList = res;
      })
    }

}
