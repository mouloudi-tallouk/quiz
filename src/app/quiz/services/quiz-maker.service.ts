import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, map } from 'rxjs';
import { HttpMethodsService } from 'src/app/shared/services/http-methods.service';
import { TriviaCategories } from 'src/app/shared/interfaces/trivia-categories.interface';
import { QuizResults } from '../interfaces/quiz-results.interface';
import { QuizRequest } from '../interfaces/quiz-request.interface';
import { Result } from 'src/app/shared/interfaces/result.interface';

const categories = environment.api.endpoint + '/api_category.php';
const quizResults = environment.api.endpoint + '/api.php';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizResultSubject = new BehaviorSubject<Result[]>([]);
  public quizData = this.quizResultSubject.asObservable(); 

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<TriviaCategories>(categories).pipe(
      map((response) => response.trivia_categories),
      catchError((error: HttpErrorResponse) => HttpMethodsService.handleError(error))
    );
  }

  createQuiz(request: QuizRequest) {
    request.amount = 5;
    request.type = "multiple";

    return this.http.get<QuizResults>(quizResults + 
      "?amount=" + request.amount + 
      "&type=" + request.type + 
      "&category=" + request.categorySelect + 
      "&difficulty=" + request.difficultySelect)
    .pipe(
      map((response) => response.results),
      catchError((error: HttpErrorResponse) => HttpMethodsService.handleError(error))
    );
  }

  changeData(data : Result[]) {
    this.quizResultSubject.next(data);
  }
}
