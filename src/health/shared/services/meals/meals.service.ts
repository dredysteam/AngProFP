import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService, User } from 'src/auth/shared/services/auth.service';

import { Store } from 'store';

export interface Meal{
  name: string,
  ingredients: string[],
  timestamp: number,
  $key: string,
  $exists:()=> boolean
}

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  // meals$: Observable<any>;

  meals$= this.db
    .list(`meals/wAoJW5SWZ5XHoHsRRKoVbfC4Bbq1`)
    .snapshotChanges()
    .pipe(
      map((next) => {
        const meals = next.map((meal) => ({
          $key: meal.key,
          ...(meal.payload.val() as {}),
        }));
        this.store.set('meals', meals);
      })
    );

  constructor(private store: Store, private db: AngularFireDatabase, private authService: AuthService) {

  }
  
  addMeal(meal:Meal) {
    return this.db.list(`meals/wAoJW5SWZ5XHoHsRRKoVbfC4Bbq1`).push(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/wAoJW5SWZ5XHoHsRRKoVbfC4Bbq1`).remove(key);
  }

  // ???
  // get uid() {
  //   return this.authService.user.then((user) => {
  //     return user.uid;
  //    });
  // }

}
