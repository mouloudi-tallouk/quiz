import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { BadInput } from '../errors/bad-input.error';
import { NotFoundError } from '../errors/not-found.error';
import { AppError } from '../errors/app-error.error';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodsService {

  constructor() { }

  public static handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      new BadInput().handleError(error);
      return throwError(() => error);
    }

    if (error.status === 404) {
      new NotFoundError().handleError(error);
      return throwError(() => error);
    }

    new AppError().handleError(error);
    return throwError(() => error);
  }
}
