import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PInfo from 'src/app/interfaces/postInfo';
import { PostService } from 'src/app/postService/post.service';

@Component({
  selector: 'app-postinfo',
  templateUrl: './postinfo.component.html',
  styleUrls: ['./postinfo.component.css'],
})
export class PostinfoComponent implements OnInit {
  postInfo?: PInfo[];

  constructor(private postSer: PostService, private postAct: ActivatedRoute) {}

  ngOnInit() {
    const postId = this.postAct.snapshot.paramMap.get('id');
    this.postSer.getPostInfo(Number(postId)).subscribe((post) => {
      this.postInfo = post;
      console.log(this.postInfo);
    });
  }
}
