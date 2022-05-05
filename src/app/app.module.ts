import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputDynamicallyComponent } from './input-dynamically/input-dynamically.component';
import { DynamicallyAddRemoveFormFieldsComponent } from './dynamically-add-remove-form-fields/dynamically-add-remove-form-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDynamicallyComponent,
    DynamicallyAddRemoveFormFieldsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
