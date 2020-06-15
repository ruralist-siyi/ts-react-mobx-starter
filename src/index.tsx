import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from '@router/index';
import { rootAppModel, RootAppContext } from '@models/index';
import './index.less';

const RootApp = () => {
  return (
    <RootAppContext.Provider value={rootAppModel}>
      <RootRouter />
    </RootAppContext.Provider>
  );
};

ReactDOM.render(<RootApp />, document.getElementById('app'));
