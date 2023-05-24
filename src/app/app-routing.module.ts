import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizMakerComponent } from './quiz/components/quiz-maker/quiz-maker.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

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
