import { createContext, useContext } from 'react';
import UserModel from './User';

function createStores() {
  return {
    user: new UserModel()
  };
}

const stores = createStores();

const StoresContext = createContext(stores);

const useStores: any = () => useContext(StoresContext);

function useUserModel(): any {
  const { user } = useStores();
  return user;
}

export { stores, useStores, useUserModel, StoresContext };
