import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://api.github.com/users/"

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  constructor(private http: HttpClient) { }

  getUser(userName:string) {
    return this.http.get(`${BASE_URL}${userName}`)
  }
}
