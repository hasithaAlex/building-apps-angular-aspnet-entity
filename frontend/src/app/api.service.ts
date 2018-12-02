import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    getQuestions(){
        return this.http.get('http://localhost:4000/api/Questions');
    }

    postQuestion(question){
        this.http.post('http://localhost:4000/api/Questions', question).subscribe(res => {
            console.log(res)
        })
    }
}