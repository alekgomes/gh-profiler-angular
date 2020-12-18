import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponent {
  @Input() currentUser:any
  @Output() submit = new EventEmitter()
  @Output() clear = new EventEmitter()

  user:any = ""
}
