import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { stores, StoresContext, useUserModel } from './models';

function A(props) {
  const { getUserInfo, userInfo } = useUserModel();
  console.log(getUserInfo);
  console.log(userInfo);
  return <div></div>;
}

ReactDOM.render(
  <Provider {...stores}>
    <StoresContext.Provider value={stores}>
      <A />
    </StoresContext.Provider>
  </Provider>,
  document.getElementById('app')
);
