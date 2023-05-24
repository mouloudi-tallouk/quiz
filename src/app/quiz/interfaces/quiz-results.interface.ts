import { Result } from "src/app/shared/interfaces/result.interface";

export interface QuizResults {
    response_code: number;
    results: Result[];
}