'use client'

import {CustomTable} from "@/shared/_ui";
import {useAppDispatch} from "@/redux/hooks";
import {generateTableConfig} from "./PlansTable.meta";
import {selectPlansListRecord, usePlansSelector} from "@/redux/slices/plans";
import {useCallback, useEffect, useState} from "react";
import {useModal} from "@/shared/lib";
import {TGeneratePlansTableConfigProps} from "./PlansTable.types";
import {FilterPlansComponent, UpdatePlanModal} from "./_ui";
import {TPlansListItem} from "@/shared/types";

const PlansTable = () => {

    const dispatch = useAppDispatch()
    
    const {plansList, selectedPlansListRecord, filtersPlans} = usePlansSelector();

    const {
        isVisible: updateModalIsVisible,
        toggleIsVisible: toggleUpdateModalIsVisible,
    } = useModal();


    const onUpdatePlansModalOpen = useCallback<
        TGeneratePlansTableConfigProps["openUpdateModalHandler"]
    >(
        (record) => {
            dispatch(selectPlansListRecord(record));
            toggleUpdateModalIsVisible();
        },
        [dispatch, toggleUpdateModalIsVisible]
    );

    const [plansListByFiltres, setPlansListByFilters] = useState<TPlansListItem[]>()

    /// filter
    useEffect(() => {
        const { value, isActive } = filtersPlans;
        const updatedPlansList = plansList.filter(item => {
            const descriptionContainsValue = item.description.includes(value);
            const isActiveMatch = item.active === isActive;
            return isActive != null ? descriptionContainsValue && isActiveMatch : descriptionContainsValue;
        });
        setPlansListByFilters(updatedPlansList);
    }, [filtersPlans,plansList]);


    // columns config
    const COLUMNS_CONFIG = generateTableConfig({
        openUpdateModalHandler: onUpdatePlansModalOpen,
    })


    return (
        <div className={'h-full flex flex-col mt-[100px] '}>
            <div className={'bg-layer-dark rounded-lg border   rounded-b-xl   border-purple pb-3'}>
                <div
                    className="flex justify-between items-center gap-x-4 p-5 pl-6 rounded-t-xl ">
                    <div className="flex justify-between items-center w-full gap-x-2">
                        <div className={'font-semibold leading-8 text-[26px]  text-white'}>Plans</div>
                        <div className={'flex justify-end gap-6 w-full '}>
                            <FilterPlansComponent/>
                        </div>
                    </div>
                </div>
                <CustomTable
                    columnsConfig={COLUMNS_CONFIG}
                    records={plansListByFiltres}
                />
            </div>
            {updateModalIsVisible && selectedPlansListRecord &&
                <UpdatePlanModal onClose={toggleUpdateModalIsVisible}/>
            }
        </div>
    );
};

export default PlansTable;
