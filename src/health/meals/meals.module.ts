import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//containers
import { MealsComponent } from './containers/meals/meals.component';

export const routes: Routes = [
  {
    path: '', component: MealsComponent
  }
]

@NgModule({
  declarations: [
    MealsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class MealsModule { }
