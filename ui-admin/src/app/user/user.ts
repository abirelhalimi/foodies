import {Cuisine} from '../cuisine/cuisine';
import {Restaurant} from '../restaurant/restaurant';

export class User {
  id: number;
  username: string;
  password: string;
  role: string;
  email: string;
  cuisines: Cuisine[];
  followers: User[];
  following: User[];
  followingRestaurant: Restaurant[];
  token?: string;
}
