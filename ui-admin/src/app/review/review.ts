import {Rating} from '../rating/rating';
import {Restaurant} from '../restaurant/restaurant';
import {User} from '../user/user';

export class Review {
  id: number;
  date: string;
  likes: number;
  rating: Rating;
  restaurant: Restaurant;
  text: string;
  user: User;
}
