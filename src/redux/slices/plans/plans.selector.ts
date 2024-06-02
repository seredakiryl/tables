import {useAppSelector} from "@/redux/hooks";
import {TPlansState} from "@/redux/slices/plans/plans.types";

export const usePlansSelector = () =>
    useAppSelector<TPlansState>((state) => state.plansReducer);