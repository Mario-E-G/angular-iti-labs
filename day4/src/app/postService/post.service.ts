import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import NewPost from '../interfaces/newPost';
import PInfo from '../interfaces/postInfo';
import { enviromnet } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = enviromnet.baseURL;

  constructor(private httpPost: HttpClient) {}

  getPostByUserId(id: number) {
    return this.httpPost.get<NewPost[]>(`${this.url}/posts?userId=${id}`);
  }

  getAllPosts() {
    return this.httpPost.get<NewPost[]>('');
  }

  getPostById(id: number) {
    return this.httpPost.get<NewPost>(`${this.url}/posts/${id}`);
  }

  getPostInfo(id: number) {
    return this.httpPost.get<PInfo[]>(`${this.url}/comments?postId=${id}`);
  }

  createPost(post: NewPost) {
    let res = this.httpPost.post(`${this.url}/posts`, post);

    res.subscribe((response) => {
      console.log(response);
    });
    // console.log(res);
  }
}
