import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

export class NotFoundError extends ErrorHandler {
    override handleError(error: HttpErrorResponse): void {
        console.log("Not Found", error);
    }
}
