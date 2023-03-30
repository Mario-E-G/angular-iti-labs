import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { CardServiceService } from '../Service/card-service.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent {
  post!: Post;
  @Input() postId!: number;
  @Output() postData = new EventEmitter();
  follow!: string;
  classTag!: string;
  constructor(private ser: CardServiceService) {
    // this.postData.emit(this.post);
  }

  // setFollow(e: Post) {
  //   if (e.creator.isFollowing) {
  //     e.creator.isFollowing = false;
  //     this.follow = 'Follow';
  //     this.classTag = 'btn btn-outline-primary';
  //   } else {
  //     e.creator.isFollowing = true;
  //     this.follow = 'Unfollow';
  //     this.classTag = 'btn btn-outline-danger';
  //   }
  // }

  changeFollow(e: Post) {
    console.log('Before Conditoin: ' + e.creator.isFollowing);

    if (e.creator.isFollowing) {
      e.creator.isFollowing = false;
    } else {
      e.creator.isFollowing = true;
    }
    console.log('After Conditoin: ' + e.creator.isFollowing);
    // this.changeClass(e.creator.isFollowing);
  }
  changeClass(isFollowing: boolean) {
    if (isFollowing) {
      this.follow = 'Unfollow';
      this.classTag = 'btn btn-outline-danger';
    } else {
      this.follow = 'Follow';
      this.classTag = 'btn btn-outline-primary';
    }
  }
  ngOnChanges(): void {
    this.post = this.ser.getPostById(this.postId);
  }
}
