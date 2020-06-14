import { createContext, useContext } from 'react';
import UserModel from './User';

function createRootAppModel() {
  return {
    user: new UserModel()
  };
}

const rootAppModel = createRootAppModel();

const RootAppContext = createContext(rootAppModel);

const useRootAppContext: any = () => useContext(RootAppContext);

export { rootAppModel, useRootAppContext, RootAppContext };
