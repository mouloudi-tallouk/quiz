import { TestBed } from '@angular/core/testing';

import { QuizService } from './quiz-maker.service';

describe('QuizMakerService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
