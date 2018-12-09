import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'quizies',
    templateUrl: './quizies.component.html'
})
export class QuiziesComponent {

    quizies:any;
    
    constructor(private api: ApiService) {}

    ngOnInit(){
        this.api.getQuis().subscribe(res => {
            this.quizies = res;
        })
    }
    
}