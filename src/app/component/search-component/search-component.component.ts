import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  @Output() submit = new EventEmitter()
  
  user:any = ""

  constructor() { }

  ngOnInit(): void {
  }

}
