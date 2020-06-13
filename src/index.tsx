import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, observer } from 'mobx-react';
import { stores, StoresContext, useUserModel } from './models';

const A = observer(() => {
  const { getUserName, userInfo, setUserInfo } = useUserModel();
  if (!getUserName) {
    setUserInfo({ name: 'zhangsan' });
  }
  console.log(1, getUserName);
  console.log(userInfo);
  return <div></div>;
});

ReactDOM.render(
  <Provider {...stores}>
    <StoresContext.Provider value={stores}>
      <A />
    </StoresContext.Provider>
  </Provider>,
  document.getElementById('app')
);
