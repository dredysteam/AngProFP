import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// shares modules
import { SharedModule } from './shared/shared.module';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path:'',pathMatch:'full', redirectTo:'login'
      },
      { path:'login' , loadChildren:() => import('./login/login.module').then(m=>m.LoginModule)},
      { path:'register' , loadChildren:() => import('./register/register.module').then(m=>m.RegisterModule)}
    ]
  }
]

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyAW4Z7PMWP3RaGtg-MGlnf3btQCgoBQf4o",
    authDomain: "fitnessapp-77418.firebaseapp.com",
    databaseURL: "https://fitnessapp-77418.firebaseio.com",
    projectId: "fitnessapp-77418",
    storageBucket: "fitnessapp-77418.appspot.com",
    messagingSenderId: "330461267555",
    appId: "1:330461267555:web:bb86f35a60b832e258da56",
    measurementId: "G-34G0X16T01"
  };

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    // to avoid service duplication call forRoot
    SharedModule.forRoot()
  ]
  
})
export class AuthModule { }
