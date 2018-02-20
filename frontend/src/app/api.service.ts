import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getQuestions(){
    //return the observable then later you can subscribe to it..
    return this.http.get('http://localhost:50865/api/questions');
  }

  postQuestion(question){
    this.http.post('http://localhost:50865/api/questions',question).subscribe(res => {
      console.log(res);
    })
  }
}


