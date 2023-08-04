import { createSlice } from '@reduxjs/toolkit';
import { getStatus } from 'redux/tracking/operations';

const initialState = {
    currentDocument: null,
    isLoading: false,
    error: null,
    history: []
};

const slice = createSlice({
    name: 'tracking',
    initialState,
    reducers: {
        clearHistory(state) {
            state.history = []
        },
        clearCurrent(state) {
            state.currentDocument = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStatus.fulfilled, (state, action) => {
                state.currentDocument = action.payload;
                state.isLoading = false;
                if (!state.history.includes(action.payload.Number)) {
                    state.history.push(action.payload.Number)
                }
                state.error = null;
            }).addCase(getStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.currentDocument = null;
            })
            .addCase(getStatus.pending, (state) => {
                state.isLoading = true;
            })
    }
})

export const { clearHistory, clearCurrent } = slice.actions

export default slice.reducer;