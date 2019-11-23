import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './view/main.component';
import MainRoute from './main-routing.module';
import { CommonHeaderComponent } from 'src/app/header/view/common-header.component';
import { HttpClientModule } from '@angular/common/http';
import { MainAction } from './action/mian.action';
import * as mainReducer from './reducer/main.reducer';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { StoreModule, ReducerManager } from '@ngrx/store';
import { ChatEffects } from './effect/main.effect';
import { EffectsModule, Actions } from '@ngrx/effects';

@NgModule({
  declarations: [
    MainComponent,
    CommonHeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoute,
    HttpClientModule,
    Ng2FlatpickrModule,
    // BrowserAnimationsModule,
    IgxCalendarModule,
    FormsModule,
    StoreModule.forFeature('chat', mainReducer.reducer),
    EffectsModule.forFeature([ChatEffects])
  ],
  providers : [
    MainAction,
    ChatEffects,
    ReducerManager,
    Actions
  ]
})

export class MainModule { }
