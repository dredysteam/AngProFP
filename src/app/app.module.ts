import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Store } from '../../src/store';

// feature modules


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
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
