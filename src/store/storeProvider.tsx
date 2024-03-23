import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { Navigate, useLocation   } from 'react-router-dom';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const hasData = Object.keys(store.getState().userStore.dataUser).length > 0;

  if (!hasData && !isHomePage) {
    return <Navigate to="/" replace={true} />;
  }
  return <Provider store={store}>{children}</Provider>;
};
