import { Component, OnInit } from '@angular/core';
import User from 'src/app/interfaces/user';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/postService/post.service';
import NewPost from 'src/app/interfaces/newPost';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user?: User;
  postArr?: NewPost[];
  post?: NewPost[];

  constructor(
    private userAct: ActivatedRoute,
    private userSer: UserServiceService,
    private postSer: PostService
  ) {}

  ngOnInit() {
    const userId = this.userAct.snapshot.paramMap.get('id');
    this.userSer.getUserById(Number(userId)).subscribe((user) => {
      this.user = user;
    });

    this.postSer.getPostByUserId(Number(userId)).subscribe((post) => {
      this.postArr = post;
    });
  }

  addPost(title: HTMLInputElement, body: HTMLInputElement) {
    console.log(title.value, body.value);
    const userId = this.userAct.snapshot.paramMap.get('id');
    const post: NewPost = {
      userId: Number(userId),
      title: title.value,
      body: body.value,
    };
    this.postArr?.push(post);

    this.postSer.createPost(post);
  }
}
