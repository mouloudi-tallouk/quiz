import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz-maker.service';
import { Category } from 'src/app/shared/interfaces/category.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Result } from 'src/app/shared/interfaces/result.interface';
import { Router } from '@angular/router';
import { QuizGuard } from '../../guards/quiz.guard';
import { MatChipListbox } from '@angular/material/chips';

@Component({
  selector: 'quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css']
})
export class QuizMakerComponent implements OnInit, OnDestroy {
  title: string = "QUIZ MAKER";

  categoryForm: FormGroup;
  questionsForm: FormGroup;

  categories: Category[] = [];
  difficulties: string[] = [
    'Easy',
    'Medium',
    'Hard'
  ];

  subscriptions: Subscription[] = [];
  questions: Result[] = [];
  showQuestions: boolean = false;
  showSelection: boolean = false;
  loading: boolean = false;

  constructor(
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    private router: Router,
    private quizGuard: QuizGuard
    ) {
    this.categoryForm = this.formBuilder.group({
      categorySelect: ['', Validators.required],
      difficultySelect: ['', Validators.required]
    });
    this.questionsForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.quizService.getCategories().subscribe({
        next: (res) => { 
          this.categories = res;
          this.showSelection = true;
        },
        error: () => { 
          this.showSelection = false;
        }
      }));
  }

  onSelectionChange(listbox: MatChipListbox, index: number) {
    const selectedOptions = listbox.value;
    this.questions[index].answers.selected_option = selectedOptions;
  }

  onCategorySubmit(form: FormGroup) {
    if (form.valid) {
      if (!this.showQuestions) {
        this.loading = true;
        this.subscriptions.push(
          this.quizService.createQuiz(form.value).subscribe({
            next: (res: Result[]) => {
              res.forEach((elem) => {
                elem.answers = {
                  options: [],
                  selected_option: ""
                };
                elem.answers.options = elem.incorrect_answers;
                elem.answers.options.push(elem.correct_answer);
                shuffle(elem.answers.options);
              });
              this.questions = res;
              this.quizService.changeData(res);
              this.showQuestions = true;
              this.loading = false;
              this.addFormControlQuestions();
            },
            error: () => {
              this.showQuestions = false;
              this.loading = false;
            }
          }));
      }
    }
  }

  onQuestionsSubmit(form: FormGroup) {
    if (form.valid) {
      this.quizGuard.setNavigatedFromQuiz(true);
      this.router.navigate(["/quiz-results"]);
    }
  }

  addFormControlQuestions(): void {
    this.questionsForm = this.formBuilder.group({});
    const questions = this.questions;

    questions.forEach((question, index) => {
      this.questionsForm.addControl(`answer${index}`, this.formBuilder.control('', Validators.required));
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

function shuffle(arr: string[]) {
  return arr.sort(() => Math.random() - 0.5);
}

