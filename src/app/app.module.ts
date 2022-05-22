import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsBasicComponent } from './05-components-basic/components-basic.component';
import { StoreComponent } from './10-components-with-async-service/store.component';

@NgModule({
  declarations: [AppComponent, ComponentsBasicComponent, StoreComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
