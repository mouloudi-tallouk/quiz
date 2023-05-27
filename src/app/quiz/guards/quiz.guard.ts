import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizGuard implements CanActivate {
  private isNavigatedFromQuiz: boolean = false;

  constructor(private router: Router) { }

  setNavigatedFromQuiz(value: boolean): void {
    this.isNavigatedFromQuiz = value;
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.isNavigatedFromQuiz) {
        this.router.navigate(['/quiz-maker']);
        return false;
      }
      return true;
  }
  
}
