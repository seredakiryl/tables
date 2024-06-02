'use client'

import {CustomTable} from "@/shared/_ui";
import {generateTableConfig} from "./PagesTable.meta";
import {selectPagesListRecord, useAppDispatch, usePagesSelector} from "@/redux";
import {useModal} from "@/shared/lib";
import {useCallback, useEffect, useState} from "react";
import {TGeneratePagesTableConfigProps} from "./PagesTable.types";
import {UpdatePageModal} from "./_ui";
import FiltersPagesComponent from "@/components/tables/PagesTable/_ui/FiltersPagesComponent/FiltersPagesComponent";
import {TPagesListItem} from "@/shared/types";

const PagesTable = () => {

    const dispatch = useAppDispatch();

    const {pagesList, selectedPagesListRecord, filtersPages} =
        usePagesSelector();

    const {
        isVisible: updateModalIsVisible,
        toggleIsVisible: toggleUpdateModalIsVisible,
    } = useModal();


    const onUpdatePageModalOpen = useCallback<
        TGeneratePagesTableConfigProps["openUpdateModalHandler"]
    >(
        (record) => {
            dispatch(selectPagesListRecord(record));
            toggleUpdateModalIsVisible();
        },
        [dispatch, toggleUpdateModalIsVisible]
    );


    // columns config
    const COLUMNS_CONFIG = generateTableConfig({
        openUpdateModalHandler: onUpdatePageModalOpen,
    });

    const [pagesListByFiltres, setPagesListByFilters] = useState<TPagesListItem[]>()

    //filters
    useEffect(() => {
        const {value, isActive} = filtersPages;
        const updatedpagesList = pagesList.filter(item => {
            const nameContainsValue = item.title.includes(value);
            const isActiveMatch = item.active === isActive;
            return isActive != null ? nameContainsValue && isActiveMatch : nameContainsValue;
        });
        setPagesListByFilters(updatedpagesList);
    }, [filtersPages,pagesList]);


    return (
        <div className={'h-full flex flex-col mt-[100px]'}>
            <div className={'bg-layer-dark rounded-lg border   rounded-b-xl   border-purple pb-3'}>
                <div
                    className="flex justify-between items-center gap-x-4 p-5 pl-6 rounded-t-xl ">
                    <div className="flex justify-between items-center w-full gap-x-2">
                        <div className={'font-semibold leading-8 text-[26px]  text-white'}>Pages</div>
                        <div className={'flex justify-end gap-6 w-full '}>
                            <FiltersPagesComponent/>
                        </div>
                    </div>
                </div>
                <CustomTable
                    columnsConfig={COLUMNS_CONFIG}
                    records={pagesListByFiltres}
                />
            </div>
            {updateModalIsVisible && selectedPagesListRecord &&
                <UpdatePageModal onClose={toggleUpdateModalIsVisible}/>
            }
        </div>
    );
};

export default PagesTable;
