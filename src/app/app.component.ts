import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  currentUser:any = null
  loading = false

  constructor(private ghService: GithubService) {}

  searchUser(userName:string) {
    this.loading = true
    this.ghService.getUser(userName).subscribe(res => {this.currentUser = res; this.loading=false})
  }

  clearSearch() {
    this.currentUser = null
    // this.user = ""
  }
}
