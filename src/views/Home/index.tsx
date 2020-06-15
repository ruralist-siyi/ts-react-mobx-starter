import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useRootAppContext } from '@models/index';

const Home: FC = () => {
  const rootAppState = useRootAppContext();
  const { getUserName, setUserInfo } = rootAppState.user;
  if (!getUserName) {
    setUserInfo({ name: 'zhangsan', email: 'sssss@193.com' });
  }
  return <>{getUserName}</>;
};

export default observer(Home);
