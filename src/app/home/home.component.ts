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

  async search(userName:string) {
    this.handleLoading()
    this.currentUser =  await this.ghService.getUser(userName)
    this.handleLoading()
  }

  clear() {
    this.currentUser = null
  }

  private handleLoading() {
    this.loading = !this.loading
  }
}
