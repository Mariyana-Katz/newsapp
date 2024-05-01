import { IUser } from 'app/shared/model/user.model';
import { IComment } from 'app/shared/model/comment.model';

export interface ILikes {
  id?: number;
  articleId?: number | null;
  userId?: number | null;
  commentId?: number | null;
  likeCount?: number | null;
  likedBy?: IUser | null;
  likedComment?: IComment | null;
}

export const defaultValue: Readonly<ILikes> = {};
