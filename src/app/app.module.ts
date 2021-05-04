import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Store } from '../../src/store';

// feature modules
import { AuthModule } from 'src/auth/auth.module';
import {HealthModule } from '../health/health.module';

// containers
import { AppComponent } from './app.component';
//components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'schedule'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthModule,
    HealthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
