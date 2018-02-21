import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent implements OnInit {
  public questionList = [] any;
    constructor(private api: ApiService) {
    }

    ngOnInit() {
      this.api.getQuestions().subscribe(res => {
        this.questionList = res;
      });
    }

}
