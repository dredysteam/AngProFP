import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party modules
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// services
import { MealsService } from './services/meals/meals.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule,
      providers: [MealsService]
       
    }
  }
 }
