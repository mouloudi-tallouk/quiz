import { ErrorHandler } from "@angular/core";

export class AppError extends ErrorHandler {
    override handleError(error: any): void {
        console.log("App Error", error);
    }
}
