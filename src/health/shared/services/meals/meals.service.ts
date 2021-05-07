import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from 'src/auth/shared/services/auth.service';

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

  meals$: Observable<any>;

  uid: string;

  constructor(private store: Store, private db: AngularFireDatabase, private authService: AuthService) {

     // Get User Id
     this.authService.user.then((user) => {
       this.uid = user.uid;
     });
    
    // Get Meals by User Id
    this.meals$ = this.db
    .list(`meals/${this.uid}`)
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
   
  }
  
}
