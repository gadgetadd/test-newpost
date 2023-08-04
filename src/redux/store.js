import { configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import trackingReducer from 'redux/tracking/trackSlice';

const trackingPersistConfig = {
    key: 'tracking',
    storage,
    whitelist: ['history'],
};

export const store = configureStore({
    reducer: {
        tracking: persistReducer(trackingPersistConfig, trackingReducer),
        // modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store);