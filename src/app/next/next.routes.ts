import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextComponent } from './view/next.component';

const routes: Routes = [
    { path: '', component: NextComponent }
];

export default RouterModule.forChild(routes);
