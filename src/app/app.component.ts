import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable,Subscription} from 'rxjs'
import { Store } from 'store';
import { AuthService, User } from '../auth/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  user$: Observable<User>;;
  subscription: Subscription;
  constructor(private store: Store,private as:AuthService, private router:Router) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.subscription = this.as.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.subscription.unsubscribe();
    
  }

  async onLogout() {
    await this.as.logoutUser();
    this.router.navigate(['/auth/login']);

  }
}
