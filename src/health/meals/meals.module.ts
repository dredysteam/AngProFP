import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//containers
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';


// components
import { MealFormComponent } from './components/meal-form/meal-form.component';

// shared modules
import { SharedModule} from '../shared/shared.module';


export const routes: Routes = [
  {
    path: '', component: MealsComponent
  },
  {
    path:'new',component:MealComponent
  }
]

@NgModule({
  declarations: [
    MealsComponent,
    MealComponent,
    MealFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MealsModule { }
