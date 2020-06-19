import { action, observable, computed } from 'mobx';

class User {
  @observable userInfo: IUserModel.TUserInfo = null;
  @observable count = 0;

  @computed get getUserName(): string | undefined {
    return this.userInfo?.name;
  }

  @action.bound
  setUserInfo(data: IUserModel.IUserInfo): void {
    this.userInfo = data;
  }

  @action.bound
  changeCount(num: number): void {
    this.count = num;
  }
}

export default User;
