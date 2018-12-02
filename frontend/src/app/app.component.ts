import { Component } from '@angular/core'
import { QuestionComponent } from './question.component'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet> <question></question><questions></questions>'
})
export class AppComponent {
  title = 'my app';
}
