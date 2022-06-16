import { Dish } from './dish';

export type Section = {
  title: string;
  url: string;
  icon: string;
  dishes?: Dish[];
  extraInfo?: string[];
  images?: string[];
};
