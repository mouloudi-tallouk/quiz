import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        MatSelectModule,
        MatButtonModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule { }