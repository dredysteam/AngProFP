import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Store } from '../../src/store';

// feature modules
import { AuthModule } from 'src/auth/auth.module';

// containers
import { AppComponent } from './app.component';


//components

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
