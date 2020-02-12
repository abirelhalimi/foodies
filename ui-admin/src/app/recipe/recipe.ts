import {User} from '../user/user';
import {Cuisine} from '../cuisine/cuisine';

export class Recipe {
  id: number;
  date: string;
  likes: number;
  text: string;
  user: User;
  cuisines: Cuisine[];
}
