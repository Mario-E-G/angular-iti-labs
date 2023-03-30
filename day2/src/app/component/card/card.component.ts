import { Component } from '@angular/core';
import posts from '../../../assets/posts.json';

type Creator = {
  id: number;
  name: string;
  followers: string;
  isOnline: boolean;
  isFollowing: boolean;
};

type IPost = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  likes: string;
  creator: Creator;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  postArr: IPost[];

  constructor() {
    this.postArr = posts;
  }
}
