import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable(); 

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable(); 

    constructor(private http: HttpClient) {}

    getQuestions(){
        return this.http.get('http://localhost:4000/api/Questions');
    }

    postQuestion(question){
        this.http.post('http://localhost:4000/api/Questions', question).subscribe(res => {
            console.log(res)
        })
    }

    putQuestion(question){
        this.http.put(`http://localhost:4000/api/Questions/${question.id}`, question).subscribe(res => {
            console.log(res)
        })
    }

    selectQuestion(question){
        this.selectedQuestion.next(question);
    }




    postQuiz(quiz){
        this.http.post('http://localhost:4000/api/Quiz', quiz).subscribe(res => {
            console.log(res)
        })
    }

    getQuis(){
        return this.http.get('http://localhost:4000/api/Quiz');
    }

    putQuiz(quiz){
        this.http.put(`http://localhost:4000/api/Quiz/${quiz.id}`, quiz).subscribe(res => {
            console.log(res)
        })
    }

    selectQuiz(quiz){
        this.selectedQuiz.next(quiz);
    }
}