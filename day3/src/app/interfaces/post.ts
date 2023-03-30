export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  likes: string;
  creator: Creator;
}

interface Creator {
  id: number;
  name: string;
  followers: string;
  isOnline: boolean;
  isFollowing: boolean;
}
