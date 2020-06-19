import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRootAppContext } from '@models/index';
import styles from './index.module.less';

const Home: FC = () => {
  const rootAppState = useRootAppContext();
  const { getUserName, setUserInfo, count, changeCount } = rootAppState.user;

  useEffect(() => {
    if (!getUserName) {
      setUserInfo({ name: 'zhangsan', email: 'sssss@193.com' });
    }
  }, [getUserName, setUserInfo]);

  return (
    <div className={styles['home']}>
      <div>
        姓名：{getUserName} <br />
        count: {count}
        <br />
        <button onClick={() => changeCount(count + 1)}>+</button>
        <button onClick={() => changeCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default observer(Home);
