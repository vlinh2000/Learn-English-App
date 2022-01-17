import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LessonApi } from 'api/LessonApi';
import { WordApi } from 'api/WordApi';



//async thunk

export const fetchLessons = createAsyncThunk("lesson/fetchLessons", async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { lessons } = await LessonApi.getAll();
        return fulfillWithValue(lessons);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }

})

export const fetchWords = createAsyncThunk("lesson/fetchWords", async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { words } = await WordApi.getAllByLesson(params);
        return fulfillWithValue(words);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }

})

const initialState =
{
    lessons: [],
    words: [],
    isLoading: false,
    error: ""
};

const lesson = createSlice({
    name: "lesson",
    initialState,
    extraReducers: {
        //get all lesson
        [fetchLessons.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchLessons.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.lessons = action.payload;
        },
        [fetchLessons.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        },
        //get all words
        [fetchWords.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchWords.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.words = action.payload;
        },
        [fetchWords.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        },
    }
})

const { reducer, actions } = lesson
export const { } = actions;
export default reducer;

