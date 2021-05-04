import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router'


export const routes: Routes = [
  {
    path: 'meals', loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule)
  },
  {
    path:'workouts', loadChildren:() => import('./workouts/workouts.module').then(m => m.WorkoutsModule)
  },
  {
    path:'schedule', loadChildren:() => import('./schedule/schedule.module').then(m => m.ScheduleModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HealthModule { }
