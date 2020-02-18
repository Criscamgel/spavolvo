import { NgModule } from '@angular/core';
import {MatIconModule, MatButtonModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatSelectModule, MatCheckboxModule, MatProgressSpinnerModule, MatExpansionModule } from '@angular/material';

const MaterialComponents = [
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatExpansionModule
]

@NgModule({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
        })
export class MaterialModule {}