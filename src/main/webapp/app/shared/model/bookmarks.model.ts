import { IUser } from 'app/shared/model/user.model';

export interface IBookmarks {
  id?: number;
  articleId?: number | null;
  userId?: number | null;
  bookmarkedBy?: IUser | null;
}

export const defaultValue: Readonly<IBookmarks> = {};
