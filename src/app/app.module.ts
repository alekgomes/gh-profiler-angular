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
import { UserCompoentComponent } from './component/user-compoent/user-compoent.component';

@NgModule({
  // import de components
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponentComponent,
    UserCompoentComponent
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
