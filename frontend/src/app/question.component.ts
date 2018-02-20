import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent implements OnInit {
    constructor(private api: ApiService) { }

    ngOnInit() { }

    // this is object type any
    question = {}

    post(question) {
        this.api.postQuestion(question);
    }
}
