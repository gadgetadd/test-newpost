import { createSlice } from '@reduxjs/toolkit';
import { getStatus } from 'redux/tracking/trackOperations';

const initialState = {
    data: null,
    isLoading: false,
    error: null
};

const authSlice = createSlice({
    name: 'tracking',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStatus.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            }).addCase(getStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getStatus.pending, (state) => {
                state.isLoading = true;
            })

    }
})

export const { clearError } = authSlice.actions

export default authSlice.reducer;