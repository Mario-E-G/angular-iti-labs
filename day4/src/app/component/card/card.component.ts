import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { CardServiceService } from '../Service/card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  postArr: Post[];
  filterPosts: Post[];
  filterdPostLength!: number;

  constructor(private ser: CardServiceService) {
    this.postArr = ser.getPosts();
    this.filterPosts = this.postArr;
  }
  getValue(element: HTMLInputElement) {
    this.filterPosts = this.postArr.filter(
      (el) => el.creator.name == element.value
    );
    if (this.filterPosts.length <= 0) {
      this.filterPosts = this.postArr;
    }
    this.filterdPostLength = this.filterPosts.length;
  }
  receivePost() {
    console.log('receive post');
  }
}
