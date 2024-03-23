import { configureStore } from '@reduxjs/toolkit';
import UserStore from './features/UserStore';

export const store = configureStore({
  reducer: {
    userStore: UserStore,
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
