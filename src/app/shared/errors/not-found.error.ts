import { ErrorHandler } from "@angular/core";

export class NotFoundError extends ErrorHandler {
    override handleError(error: any): void {
        console.log("Not Found", error);
    }
}
