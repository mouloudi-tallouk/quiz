import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../../services/quiz-maker.service';
import { Result } from 'src/app/shared/interfaces/result.interface';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})

export class QuizResultsComponent implements OnInit, OnDestroy {
  title: string = "RESULTS";

  subscriptions: Subscription[]= [];
  results: Result[] = [];
  scored : number = 0;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.quizService.quizData.subscribe({
        next: (res: Result[]) => {
          this.results = res; 
          this.scored = 0;
          this.results.forEach((question) => {
            if(question.correct_answer == question.answers.selected_option){
              this.scored++;
            }
          });
        },
        error: () => { }
      }));
  }

  ngOnDestroy(): void {
    this.quizService.changeData([]);
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
