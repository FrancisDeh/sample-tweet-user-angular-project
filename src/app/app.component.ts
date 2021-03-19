import {Component} from '@angular/core';
import {User} from './models/user';
import {UserApiService} from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome';

  users: User[] = [];
  user: User = new User('Benjamin', 'benjamin@gmail.com', 'password', 'benjie');

  constructor(private userService: UserApiService) {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getUsersPrepared();
  }
}
