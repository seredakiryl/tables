import {TPlansListItem} from "@/shared/types";

export type TPlansState = {
    selectedPlansListRecord?: TPlansListItem;
    plansList: Array<TPlansListItem>
    filtersPlans: {
        value: string,
        isActive: boolean | null
    },
};

