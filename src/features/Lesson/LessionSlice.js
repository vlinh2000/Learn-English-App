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

export const deleteLesson = createAsyncThunk("lesson/deleteLesson", async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await LessonApi.delete(params);
        return fulfillWithValue(response);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }

})

export const increaseListenTime = createAsyncThunk("lesson/increaseListenTime", async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
        await LessonApi.patch(params, { time: 1 });
        return fulfillWithValue(true);
    } catch (error) {
        return rejectWithValue(error);
    }

})

const initialState =
{
    lessons: [],
    words: [],
    isLoading: false,
    error: "",
    lessonSelected: {},
    isVisibleAddLessonModal: false,
    isEdit: false
};

const lesson = createSlice({
    name: "lesson",
    initialState,
    reducers: {
        switchAddLessonModal: (state, action) => {
            state.isVisibleAddLessonModal = action.payload;
        },
        chooseLesson: (state, action) => {
            state.lessonSelected = state.lessons.find(lesson => lesson._id === action.payload);
        },
        setIsEdit: (state, action) => {
            state.isEdit = action.payload
        }
    },
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
        //post increase  listen time
        [increaseListenTime.pending]: (state) => {
            state.isLoading = true;
        },
        [increaseListenTime.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [increaseListenTime.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        },
    }
})

const { reducer, actions } = lesson
export const { switchAddLessonModal, chooseLesson, setIsEdit } = actions;
export default reducer;

