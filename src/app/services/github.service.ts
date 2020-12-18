import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://api.github.com/users/"
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUser(userName:string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${BASE_URL}${userName}`)
        .subscribe((res:any) => resolve(res), (error:any) => resolve(error.error))
    })
  }
}
