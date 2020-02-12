import {Cuisine} from '../cuisine/cuisine';
import {User} from '../user/user';

export class Restaurant {
  id: number;
  cuisines: Cuisine[];
  email: string;
  followers: User[];
  latitude: number;
  longitude: number;
  name: string;
  password: string;
  role: string;
  telephone: string;
  username: string;

}
