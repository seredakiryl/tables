import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {name, initialState} from './products.meta';
import {TProductsListItem} from "@/shared/types";


export const productsSlice = createSlice({
    name,
    initialState,
    reducers: {
        selectProductsListRecord: (
            state,
            action: PayloadAction<TProductsListItem>
        ) => {
            state.selectedProductsListRecord = action.payload;
        },
        resetSelectedProductsListRecord: (state) => {
            state.selectedProductsListRecord =
                initialState.selectedProductsListRecord;
        },
        changeSelectProductRecord: ({productsList}, action: PayloadAction<TProductsListItem>) => {
            const index = productsList.findIndex((item) => item.id == action.payload.id);
            productsList[index] = {...productsList[index], ...action.payload};
        },
        setFiltersProductsRecord: (state, action: PayloadAction<{ value: string, isActive: boolean }>) => {
            state.filtersProducts = action.payload
        }
    },
});

export const {
    selectProductsListRecord,
    resetSelectedProductsListRecord,
    changeSelectProductRecord,
    setFiltersProductsRecord
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
