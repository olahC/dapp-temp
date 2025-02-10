import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import SettingReducer from './settingSlice'


const createNoopStorage = () => {
  return {
      getItem(_key:any) {
      return Promise.resolve(null);
      },
      setItem(_key:any, value:any) {
      return Promise.resolve(value);
      },
      removeItem(_key:any) {
      return Promise.resolve();
      },
  };
};

const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage('local');


const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
};
const rootReducer = combineReducers({
  setting: SettingReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware({
          immutableCheck: {
              ignoredPaths: [],
          },
          serializableCheck: {
              ignoredPaths: [],
              ignoredActions: [
                  'persist/PERSIST', 
                  'persist/PURGE', 
                  'persist/REHYDRATE',
                  'persist/FLUSH',
                  'persist/PAUSE',
                  'persist/REGISTER',
              ],
          },
      });
      
      return middleware;
      },
})
export const persistor = persistStore(store)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
