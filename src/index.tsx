import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import RootRouter from '@router/index';
import { rootAppModel, RootAppContext } from '@models/index';
import './index.less';

const isDev = process.env.NODE_ENV === 'development';

let RootApp = () => {
  return (
    <RootAppContext.Provider value={rootAppModel}>
      <RootRouter />
    </RootAppContext.Provider>
  );
};

if (isDev) {
  RootApp = hot(RootApp);
}
ReactDOM.render(<RootApp />, document.getElementById('app'));
