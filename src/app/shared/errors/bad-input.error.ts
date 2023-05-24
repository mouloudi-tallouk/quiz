import { ErrorHandler } from "@angular/core";

export class BadInput extends ErrorHandler {
    override handleError(error: any): void {
        console.log("Bad Input", error);
    }
}
