import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRootAppContext } from '@models/index';
import styles from './index.module.less';

const Home: FC = () => {
  const rootAppState = useRootAppContext();
  const { getUserName, setUserInfo } = rootAppState.user;
  useEffect(() => {
    if (!getUserName) {
      setUserInfo({ name: 'zhangsan', email: 'sssss@193.com' });
    }
  }, [getUserName, setUserInfo]);
  return <div className={styles['home']}>{getUserName}12</div>;
};

export default observer(Home);
