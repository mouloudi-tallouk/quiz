import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizMakerComponent } from './quiz/components/quiz-maker/quiz-maker.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from './quiz/services/quiz-maker.service';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizResultsComponent } from './quiz/components/quiz-results/quiz-results.component';
import { UnEscapePipe } from './shared/pipes/unescape.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuizMakerComponent,
    PageNotFoundComponent,
    QuizResultsComponent,
    UnEscapePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
