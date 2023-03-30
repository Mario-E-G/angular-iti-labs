import { importProvidersFrom, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private httpser: HttpClient) {}

  getAllUsers() {
    return this.httpser.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getUserById(id: number) {
    return this.httpser.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
