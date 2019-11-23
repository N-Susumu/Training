import { NgModule } from '@angular/core';
import { CommonHeaderComponent } from './view/common-header.component';
import { CommonModule } from '@angular/common';
import { CommonHeaderAction } from './action/common-header.action';
import { AppModule } from '../app.module';

@NgModule({
    declarations : [
        CommonHeaderComponent
    ],
    imports : [
        CommonModule,
        CommonHeaderComponent
    ],
    providers : [
        CommonHeaderAction
    ],
    exports : [
        CommonHeaderComponent
    ]
})

export class CommonHeaderModule { }
