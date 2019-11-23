import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './view/main.component';

const routes: Routes = [
    { path: '', component: MainComponent }
];

export default RouterModule.forChild(routes);
