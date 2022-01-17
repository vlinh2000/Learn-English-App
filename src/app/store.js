import { configureStore, combineReducers } from '@reduxjs/toolkit';
import LessonReducer from "features/Lesson/LessionSlice";

const rootReducers = combineReducers({
    homeInfo: LessonReducer
})

const store = configureStore({
    reducer: rootReducers
})

export default store;