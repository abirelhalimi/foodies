import {Restaurant} from '../restaurant/restaurant';

export class Donation {
  id: number;
  date: string;
  likes: number;
  offer: boolean;
  pickedUp: boolean;
  quantity: number;
  restaurant: Restaurant;
}
