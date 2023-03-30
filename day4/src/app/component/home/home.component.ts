import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/Service/user-service.service';
import User from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userArr!: User[];

  constructor(private userService: UserServiceService) {
    this.userService.getAllUsers().subscribe((user) => (this.userArr = user));
    console.log(this.userArr);
  }
}
