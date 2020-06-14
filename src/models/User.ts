import { action, observable, computed, configure } from 'mobx';

configure({ enforceActions: 'observed' });

interface IUser {
  name: string;
}

type TUserInfo = IUser | null;

class User {
  @observable userInfo: TUserInfo = null;

  @computed get getUserName(): string | undefined {
    return this.userInfo?.name;
  }

  @action.bound
  setUserInfo(data: IUser) {
    console.log('setUserInfo', data);
    this.userInfo = data;
  }
}

export default User;
