import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

export class AppError extends ErrorHandler {
    override handleError(error: HttpErrorResponse): void {
        console.log("App Error", error);
    }
}
