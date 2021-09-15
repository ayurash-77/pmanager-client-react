import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import api from './middleware/api';

export default function configureAppStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware(),
      // logger({ destination: "console" }),
      // toast,
      api,
    ],
  });
}
