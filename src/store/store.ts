import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slice/userdata.slice";
import storage from "redux-persist/lib/storage";
import authReducer from "./slice/auth.slice";

const persistConfig = {
  key: "lendsqr",
  storage,
  blacklist: ['global']
};

export const rootReducer = combineReducers({
  auth: authReducer,
  userData: userDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;