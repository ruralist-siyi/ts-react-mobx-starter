import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import * as MobxRouterType from 'mobx-react-router/types';
import { createBrowserHistory } from 'history';
import { openMobxLogger } from '@utils/mobx';
import UserModel from './user';

configure({ enforceActions: 'observed' });

openMobxLogger(['action']);

interface IRootAppModel {
  user: IUserModel.UserModel;
  routing: MobxRouterType.RouterStore;
}
const browserHistory = createBrowserHistory();
const routingStore: MobxRouterType.RouterStore = new RouterStore();

function createRootAppModel(): IRootAppModel {
  return {
    user: new UserModel(),
    routing: routingStore
  };
}

const history = syncHistoryWithStore(browserHistory, routingStore);

const rootAppModel = createRootAppModel();

const RootAppContext = createContext<IRootAppModel>(rootAppModel);

const useRootAppContext: () => IRootAppModel = () => useContext(RootAppContext);

export { rootAppModel, useRootAppContext, RootAppContext, history };
