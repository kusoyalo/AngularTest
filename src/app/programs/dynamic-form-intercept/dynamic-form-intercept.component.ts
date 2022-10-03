import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { QuestionBase } from '../dynamic-form-question/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-form-intercept',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  styleUrls: ['./dynamic-form-intercept.component.scss'],
  providers:  [QuestionService]
})
export class DynamicFormInterceptComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;
  
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
