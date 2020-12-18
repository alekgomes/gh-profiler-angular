import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/layout/header/header.component';
import { SearchComponentComponent } from './component/search-component/search-component.component';

@NgModule({
  // import de components
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponentComponent
  ],
  // import de modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  // import de services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
