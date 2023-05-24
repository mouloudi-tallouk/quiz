import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../../services/quiz-maker.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[]= [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.quizService.quizData.subscribe({
        next: (res) => { console.log(res); },
        error: () => { }
      }));
  }

  ngOnDestroy(): void {
    this.quizService.changeData([]);
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
