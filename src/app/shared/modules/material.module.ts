import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
    imports: [
        MatSelectModule,
        MatButtonModule,
        MatChipsModule,
        MatProgressBarModule
    ],
    exports: [
        MatSelectModule,
        MatButtonModule,
        MatChipsModule,
        MatProgressBarModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule { }