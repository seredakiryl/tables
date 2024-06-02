import {TProductsListItem} from "@/shared/types";

export type TProductsState = {
    selectedProductsListRecord?: TProductsListItem;
    productsList: Array<TProductsListItem>,
    filtersProducts: {
        value: string,
        isActive: boolean | null
    }
};

