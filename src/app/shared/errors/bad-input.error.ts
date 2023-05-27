import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

export class BadInput extends ErrorHandler {
    override handleError(error: HttpErrorResponse): void {
        console.log("Bad Input", error);
    }
}
