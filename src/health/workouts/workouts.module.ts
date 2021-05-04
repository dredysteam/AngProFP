import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//containers
import {WorkoutsComponent } from './containers/workouts/workouts.component';

export const routes: Routes = [
  {
    path:'', component:WorkoutsComponent
  }
]

@NgModule({
  declarations: [
    WorkoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkoutsModule { }
