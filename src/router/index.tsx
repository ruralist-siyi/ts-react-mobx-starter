import React, { FC } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '@models/index';
import Home from '@views/Home';
import Login from '@views/Login';

const RootRouter: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
};

export default RootRouter;
