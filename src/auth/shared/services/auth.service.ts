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

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    this.af.signOut();
  }
}
