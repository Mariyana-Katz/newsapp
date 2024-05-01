import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { Category } from 'app/shared/model/enumerations/category.model';

export interface IArticle {
  id?: number;
  sourceName?: string | null;
  category?: keyof typeof Category | null;
  author?: string | null;
  title?: string | null;
  shortDescription?: string | null;
  url?: string | null;
  urlToImage?: string | null;
  published?: dayjs.Dayjs | null;
  content?: string | null;
  likes?: number | null;
  likedBies?: IUser[] | null;
  bookMarkedBies?: IUser[] | null;
  users?: IUser[] | null;
}

export const defaultValue: Readonly<IArticle> = {};
