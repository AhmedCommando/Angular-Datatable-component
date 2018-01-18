import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataTableComponentComponent } from './data-table-component/data-table-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
