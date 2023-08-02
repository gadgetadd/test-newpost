import { createSlice } from '@reduxjs/toolkit';
import { getSettlements, getWarehouses } from './authOperations';

const initialState = {
    branches: { data: [], isLoading: false },
    settlements: { data: [], isLoading: false },
    error: null
};

const authSlice = createSlice({
    name: 'branches',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWarehouses.fulfilled, (state, action) => {
                state.branches.data = action.payload;
                state.branches.isLoading = false;
            }).addCase(getWarehouses.rejected, (state, action) => {
                state.branches.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getWarehouses.pending, (state) => {
                state.branches.isLoading = true;
            })
            .addCase(getSettlements.fulfilled, (state, action) => {
                state.branches.data = action.payload;
                state.branches.isLoading = false;
            }).addCase(getSettlements.rejected, (state, action) => {
                state.branches.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getSettlements.pending, (state) => {
                state.branches.isLoading = true;
            })
    }
})

export const { clearError } = authSlice.actions

export default authSlice.reducer;