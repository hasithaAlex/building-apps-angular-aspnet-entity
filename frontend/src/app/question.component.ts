import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent implements OnInit {
    constructor(private api: ApiService) { }

    // this is object type any
    question = {};

    post(question) {
        this.api.postQuestion(question);
    }

    ngOnInit() {
      this.api.questionSelected.subscribe(question => this.question = question);
    }
}
