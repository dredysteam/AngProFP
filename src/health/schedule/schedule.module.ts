import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

//containers
import { ScheduleComponent } from './containers/schedule/schedule.component';


export const routes: Routes = [
  {
    path:'',component:ScheduleComponent
  }
]

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ScheduleModule { }
