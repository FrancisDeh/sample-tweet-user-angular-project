import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private httpClient: HttpClient) { }

  getUsers() : Observable<any> {
    // call the api to get all users
    //get , post, patch, put, delete etc
    return this.httpClient.get("https://randomuser.me/api/?results=10")
  }

  getUsersPrepared() : User[] {

    let users: User[] = []

    this.getUsers().subscribe(response => {
      console.log('response', response['results']);

      let userResponse: any[] = response['results'];
      userResponse.forEach(user => {
        let email = user['email'];
        let nickname = user['login']['username'];
        let password = user['login']['password'];
        let firstName = user['name']['first'];
        let lastName = user['name']['last'];
        let name = firstName + ' ' + lastName;
        let newUser: User = new User(name, email, password, nickname)
        console.log(newUser)
        users.push(newUser)
      })
    })

      return users;
  }

  addUser(data: object) {
    return this.httpClient.post("url", data)
  }
}
