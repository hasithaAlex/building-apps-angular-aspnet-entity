import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent implements OnInit {
  public questionList;
    constructor(private api: ApiService) {
    }

    ngOnInit() {
      this.api.getQuestions().subscribe(res => {
        this.questionList = res;
      });
    }

}
