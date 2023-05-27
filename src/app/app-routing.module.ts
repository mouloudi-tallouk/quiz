import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizMakerComponent } from './quiz/components/quiz-maker/quiz-maker.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { QuizResultsComponent } from './quiz/components/quiz-results/quiz-results.component';
import { QuizGuard } from './quiz/guards/quiz.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz-maker',
    pathMatch: 'full'
  },
  {
    path: 'quiz-maker',
    component: QuizMakerComponent,
  },
  {
    path: 'quiz-results',
    component: QuizResultsComponent,
    canActivate: [QuizGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
