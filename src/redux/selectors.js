export const selectTrackingData = state => state.tracking.currentDocument;
export const selectHistory = state => state.tracking.history;
export const selectIsTrackLoading = state => state.tracking.isLoading;
export const selectError = state => state.tracking.error;