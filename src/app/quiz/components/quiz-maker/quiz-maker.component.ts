import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz-maker.service';
import { Category } from 'src/app/shared/interfaces/category.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { QuizResults } from '../../interfaces/quiz-results.interface';
import { Subscription } from 'rxjs';
import { Result } from 'src/app/shared/interfaces/result.interface';

@Component({
  selector: 'quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css']
})
export class QuizMakerComponent implements OnInit, OnDestroy {
  title: string = "QUIZ MAKER";
  categories: Category[] = [];
  difficulties: string[] = [
    'Easy',
    'Medium',
    'Hard'
  ];
  form: FormGroup = new FormGroup({
    categorySelect: new FormControl(""),
    difficultySelect: new FormControl("")
  });
  subscriptions: Subscription[] = [];
  questions: Result[] = [];


  constructor(private quizService: QuizService) { }


  ngOnInit(): void {
    this.subscriptions.push(
      this.quizService.getCategories().subscribe({
        next: (res) => { console.log(res); this.categories = res },
        error: () => { }
      }));
  }

  onSubmit(form: FormGroup) {
    this.subscriptions.push(
      this.quizService.createQuiz(form.value).subscribe({
      next: (res: Result[]) => {
        this.questions = res;
        this.quizService.changeData(res);
        console.log(res);
      },
      error: () => { }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.quizService.changeData([]);
  }

}
