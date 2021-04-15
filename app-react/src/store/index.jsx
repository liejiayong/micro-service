import React, { createContext, useContext } from 'react';
import { configure } from 'mobx';
import counter from './modules/counter';

configure({ enforceActions: 'observed' });

export const store = { counter };

const StoreContext = createContext(store);

export const StoreProvider = ({ children }) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('no store');
  }

  return store;
};
