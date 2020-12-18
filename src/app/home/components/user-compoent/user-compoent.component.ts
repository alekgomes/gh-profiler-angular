import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-compoent',
  templateUrl: './user-compoent.component.html',
  styleUrls: ['./user-compoent.component.scss']
})
export class UserComponent {
  @Input() currentUser:any
}
