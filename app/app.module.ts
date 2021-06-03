import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { AddConversionComponent } from './add-conversion/add-conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionsComponent,
    AddConversionComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
