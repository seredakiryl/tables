'use client';

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {productsReducer} from './slices'
import {plansReducer} from "@/redux/slices/plans";
import {pagesReducer} from "@/redux/slices/pages";

const createRootReducer = () => ({
    productsReducer,
    plansReducer,
    pagesReducer,
});

export const store = configureStore({
    reducer: combineReducers({
        ...createRootReducer(),
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(
            // baseApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
