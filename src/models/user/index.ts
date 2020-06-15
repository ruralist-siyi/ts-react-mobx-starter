import { action, observable, computed } from 'mobx';

class User {
  @observable userInfo: IUserModel.TUserInfo = null;

  @computed get getUserName(): string | undefined {
    return this.userInfo?.name;
  }

  @action.bound
  setUserInfo(data: IUserModel.IUserInfo): void {
    this.userInfo = data;
  }
}

export default User;
