import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {name, initialState} from './pages.meta';
import {TPagesListItem} from "@/shared/types";

export const pagesSlice = createSlice({
    name,
    initialState,
    reducers: {
        selectPagesListRecord: (
            state,
            action: PayloadAction<TPagesListItem>
        ) => {
            state.selectedPagesListRecord = action.payload;
        },
        resetSelectedPagesListRecord: (state) => {
            state.selectedPagesListRecord =
                initialState.selectedPagesListRecord;
        },
        changeSelectPageRecord: ({pagesList}, action: PayloadAction<TPagesListItem>) => {
            const index = pagesList.findIndex((item) => item.id == action.payload.id);
            pagesList[index] = {...pagesList[index], ...action.payload};
        },
        setFiltersPagesRecord: (state, action: PayloadAction<{ value: string, isActive: boolean }>) => {
            state.filtersPages = action.payload
        }
    },
});

export const {
    selectPagesListRecord,
    resetSelectedPagesListRecord,
    changeSelectPageRecord,
    setFiltersPagesRecord
} = pagesSlice.actions;

export const pagesReducer = pagesSlice.reducer;
