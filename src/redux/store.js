import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { persistedContactsReducer } from "./slice";

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
    },

    middleware: getDefaultMiddleWare => 
     getDefaultMiddleWare({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
     }),
});

export const persistor = persistStore(store);