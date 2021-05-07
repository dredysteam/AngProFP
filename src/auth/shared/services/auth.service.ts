import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from 'store';
import {tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User{
  email: string,
  uid: string,
  authenticated:boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth$: Observable<any>;
  constructor(private af: AngularFireAuth, private store: Store) {
    this.auth$ = this.af.authState.pipe(
      tap(next => {
        if (!next) {
          this.store.set('user', null);
          return;
        }
        const user: User = {
          email: next.email,
          uid: next.uid,
          authenticated:true
        }
        this.store.set('user', user);
      })
    )
  }

  // Register Container Use
  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }
  // Login Container Use
  loginUser(email: string, password: string) {
    return this.af.signInWithEmailAndPassword(email, password);
  }
  // App Container Use
  logoutUser() {
    this.af.signOut();
  }

  // Use for Guard to verify authentication (AuthState)
  get authState() {
    return this.af.authState;
  }
  // Get Current User 
  get user() {
    return this.af.currentUser;
  }
}
