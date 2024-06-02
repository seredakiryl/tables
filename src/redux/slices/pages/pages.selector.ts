import {useAppSelector} from "@/redux/hooks";
import {TPagesState} from "@/redux/slices/pages/pages.types";

export const usePagesSelector = () =>
    useAppSelector<TPagesState>((state) => state.pagesReducer);