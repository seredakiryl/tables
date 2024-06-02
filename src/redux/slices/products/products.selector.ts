import {useAppSelector} from "@/redux/hooks";
import {TProductsState} from "./products.types";

export const useProductsSelector = () =>
    useAppSelector<TProductsState>((state) => state.productsReducer);