import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';

export interface IComment {
  id?: number;
  commentText?: string | null;
  createdAt?: dayjs.Dayjs | null;
  likes?: number | null;
  user?: IUser | null;
}

export const defaultValue: Readonly<IComment> = {};
