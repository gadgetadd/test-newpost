import { createSelector } from 'reselect';

export const selectSettlements = createSelector(
    state => state.branches.settlements.data,
    data => {
        const settlements = data.map(obj => obj.Description);
        const filtered = new Set(settlements);
        return Array.from(filtered);
    }
);


export const selectSettlementsLoading = state => state.branches.settlements.isLoading;
// export const selectIsTrackLoading = state => state.tracking.isLoading;
// export const selectError = state => state.tracking.error;