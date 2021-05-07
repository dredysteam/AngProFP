import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '../auth/shared/guards/auth.guard';


// shared modules
import {SharedModule } from './shared/shared.module';

export const routes: Routes = [
  {
    path: 'meals', canActivate:[AuthGuard], loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule)
  },
  {
    path:'workouts', canActivate:[AuthGuard], loadChildren:() => import('./workouts/workouts.module').then(m => m.WorkoutsModule)
  },
  {
    path:'schedule', canActivate:[AuthGuard], loadChildren:() => import('./schedule/schedule.module').then(m => m.ScheduleModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ]
})
export class HealthModule { }
