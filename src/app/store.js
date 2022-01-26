import { configureStore, combineReducers } from '@reduxjs/toolkit';
import LessonReducer from "features/Lesson/lessionSlice";
import AuthReducer from "features/Auth/authSlice";
import storage from 'redux-persist/lib/storage';

import { persistStore, persistReducer, } from 'redux-persist'

const authPersistConfig = {
    key: "auth",
    storage
}

const rootReducers = combineReducers({
    homeInfo: LessonReducer,
    auth: persistReducer(authPersistConfig, AuthReducer)
})

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

export const persistor = persistStore(store);

export default store;