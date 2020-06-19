import React, { FC } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import DynamicCompnent from './DynamicCompnent';
import { history } from '@models/index';

const RootRouter: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path='/'
          component={DynamicCompnent(React.lazy(() => import('@views/Home')))}
        />
        <Route
          exact
          path='/login'
          component={DynamicCompnent(React.lazy(() => import('@views/Login')))}
        />
      </Switch>
    </Router>
  );
};

export default RootRouter;
