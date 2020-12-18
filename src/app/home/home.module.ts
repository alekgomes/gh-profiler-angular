import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SearchComponent } from './components/search-component/search-component.component';
import { UserComponent } from './components/user-compoent/user-compoent.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  // import de components
  declarations: [HomeComponent, SearchComponent, UserComponent],

  // import de modules
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
