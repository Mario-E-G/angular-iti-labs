import { Injectable } from '@angular/core';
import posts from '../../../assets/posts.json';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  constructor() {}

  getPosts() {
    return posts;
  }

  getPostById(id: number) {
    return posts.filter((post) => post.id == id)[0];
  }
}
