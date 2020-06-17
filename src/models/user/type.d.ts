import User from './index';

export as namespace IUserModel;

export type UserModel = User;

export interface IUserInfo {
  name: string;
  email: string;
}

export type TUserInfo = IUserInfo | null;
