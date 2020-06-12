import { action, observable, computed } from 'mobx';

interface IUser {
  name: string;
}

type TUserInfo = IUser | null;

class User {
  @observable userInfo: TUserInfo = null;

  @computed get getUserInfo(): TUserInfo {
    return this.userInfo;
  }

  @action.bound setUserInfo(data: IUser) {
    this.userInfo = data;
  }
}

export default User;
