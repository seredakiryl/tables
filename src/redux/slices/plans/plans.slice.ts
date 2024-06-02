import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {name, initialState} from './plans.meta';
import {TPlansListItem} from "@/shared/types";
import {state} from "sucrase/dist/types/parser/traverser/base";
import {boolean} from "yup";


export const PlansSlice = createSlice({
    name,
    initialState,
    reducers: {
        selectPlansListRecord: (
            state,
            action: PayloadAction<TPlansListItem>
        ) => {
            state.selectedPlansListRecord = action.payload;
        },
        resetSelectedPlansListRecord: (state) => {
            state.selectedPlansListRecord =
                initialState.selectedPlansListRecord;
        },
        changeSelectPlanRecord: ({plansList}, action: PayloadAction<TPlansListItem>) => {
            const index = plansList.findIndex((item) => item.id == action.payload.id);
            plansList[index] = {...plansList[index], ...action.payload};
        },
        setFiltersPlansRecord: (state, action: PayloadAction<{ value: string, isActive: boolean }>) => {
            state.filtersPlans = action.payload
        }
    },
});

export const {
    selectPlansListRecord,
    resetSelectedPlansListRecord,
    changeSelectPlanRecord,
    setFiltersPlansRecord,
} = PlansSlice.actions;

export const plansReducer = PlansSlice.reducer;
