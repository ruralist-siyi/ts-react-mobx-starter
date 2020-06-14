import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { rootAppModel, RootAppContext, useRootAppContext } from './models';

const A = observer(() => {
  const appModel = useRootAppContext();
  const { getUserName, userInfo, setUserInfo } = appModel.user;
  if (!getUserName) {
    setUserInfo({ name: 'zhangsan' });
  }
  console.log(1, getUserName);
  console.log(userInfo);
  console.log(appModel);
  return <div>{getUserName}</div>;
});

const RootApp = () => {
  return (
    <RootAppContext.Provider value={rootAppModel}>
      <A />
    </RootAppContext.Provider>
  );
};

ReactDOM.render(<RootApp />, document.getElementById('app'));
