import {User} from '../user/user';

export class Comment {
  id: number;
  date: string;
  likes: number;
  text: string;
  user: User;
}
