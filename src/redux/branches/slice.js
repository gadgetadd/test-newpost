import { createSlice } from '@reduxjs/toolkit';
import { getSettlements, getWarehouses } from './operations';

const initialState = {
    current: '',
    branches: { data: [], isLoading: false },
    settlements: { data: [], isLoading: false },
};

const slice = createSlice({
    name: 'branches',
    initialState,
    reducers: {
        setCurrent(state, action) {
            state.current = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWarehouses.fulfilled, (state, action) => {
                state.branches.data = action.payload;
                state.branches.isLoading = false;
            }).addCase(getWarehouses.rejected, (state, action) => {
                state.branches.isLoading = false;
            })
            .addCase(getWarehouses.pending, (state) => {
                state.branches.isLoading = true;
            })
            .addCase(getSettlements.fulfilled, (state, action) => {
                state.settlements.data = action.payload;
                state.settlements.isLoading = false;
            }).addCase(getSettlements.rejected, (state, action) => {
                state.settlements.isLoading = false;
            })
            .addCase(getSettlements.pending, (state) => {
                state.settlements.isLoading = true;
            })
    }
})

export const { setCurrent } = slice.actions

export default slice.reducer;