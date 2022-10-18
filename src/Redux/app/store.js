import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cakeReducer from '../features/cake/cakeSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistConfigCake = {
  key: 'cake',
  storage,
}


const persistedReducer = persistReducer(persistConfig, counterReducer)   //Used persist library to save states of redux store ..we can store in local,sessions or cokkies etc
const persistedReducerCake = persistReducer(persistConfigCake, cakeReducer)
export const store = configureStore({
  reducer: {
    counter: persistedReducer,
    cake: persistedReducerCake
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store)