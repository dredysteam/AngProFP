import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party modules
import { AngularFireDatabaseModule } from '@angular/fire/database';
// services
import { MealsService } from './services/meals/meals.service';

// components
import { ListItemComponent } from './components/list-item/list-item.component';


@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule
  ],
  exports:[ListItemComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule,
      providers: [MealsService]
       
    }
  }
 }
