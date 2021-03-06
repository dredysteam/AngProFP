import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Meal, MealsService } from 'src/health/shared/services/meals/meals.service';
import { Store } from 'store';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit,OnDestroy {

  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(private mealsService: MealsService, private store: Store) {
    
   }

  ngOnInit(): void {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$.subscribe();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeMeal(event:Meal) {
    this.mealsService.removeMeal(event.$key);
  }

}
