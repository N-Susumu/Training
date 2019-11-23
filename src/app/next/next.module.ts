import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NextComponent } from './view/next.component';
import NextRoute from './next.routes';

@NgModule({
  declarations: [
    NextComponent
  ],
  imports: [
    CommonModule,
    NextRoute
  ]
})

export class NextModule { }
