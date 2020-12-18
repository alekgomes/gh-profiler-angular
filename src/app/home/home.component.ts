import { Component } from '@angular/core';
import { GithubService } from '../services/github.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  currentUser:any = null
  loading:boolean = false

  constructor(private ghService: GithubService) { }

  search(userName:string) {
    console.log(userName)
    this.handleLoading()
    this.ghService.getUser(userName).subscribe(res => {
      this.currentUser = res
      this.handleLoading()
    })
  }

  clear() {
    this.currentUser = null
  }

  private handleLoading() {
    this.loading = !this.loading
  }
}
