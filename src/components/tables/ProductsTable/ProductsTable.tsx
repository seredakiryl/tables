'use client'

import {CustomTable} from "@/shared/_ui";
import {useAppDispatch} from "@/redux/hooks";
import {generateTableConfig} from "./ProductsTable.meta";
import {selectProductsListRecord, useProductsSelector} from "@/redux";
import {useModal} from "@/shared/lib";
import {useCallback, useEffect, useState} from "react";
import {TGenerateProductsTableConfigProps} from "./ProductsTable.types";
import {FiltersProductsComponent, UpdateProductModal} from "./_ui";
import {TProductsListItem} from "@/shared/types";

const ProductsTable = () => {

    const dispatch = useAppDispatch();

  
    const {productsList, selectedProductsListRecord, filtersProducts} =
        useProductsSelector();

    const {
        isVisible: updateModalIsVisible,
        toggleIsVisible: toggleUpdateModalIsVisible,
    } = useModal();


    const onUpdateProductModalOpen = useCallback<
        TGenerateProductsTableConfigProps["openUpdateModalHandler"]
    >(
        (record) => {
            dispatch(selectProductsListRecord(record));
            toggleUpdateModalIsVisible();
        },
        [dispatch, toggleUpdateModalIsVisible]
    );


    // columns config
    const COLUMNS_CONFIG = generateTableConfig({
        openUpdateModalHandler: onUpdateProductModalOpen,
    });

    const [productsListByFiltres, setProductsListByFilters] = useState<TProductsListItem[]>()

    //filters
    useEffect(() => {
        const {value, isActive} = filtersProducts;
        const updatedProductsList = productsList.filter(item => {
            const nameContainsValue = item.name.includes(value);
            const isActiveMatch = item.active === isActive;
            return isActive != null ? nameContainsValue && isActiveMatch : nameContainsValue;
        });
        setProductsListByFilters(updatedProductsList);
    }, [filtersProducts,productsList]);


    return (
        <div className={'h-full flex flex-col  mt-[100px]'}>
            <div className={'bg-layer-dark rounded-lg border   rounded-b-xl   border-purple pb-3'}>
                <div
                    className="flex justify-between items-center gap-x-4 p-5 pl-6 rounded-t-xl ">
                    <div className="flex justify-between items-center w-full gap-x-2">
                        <div className={'font-semibold leading-8 text-[26px]  text-white'}>Products</div>
                        <div className={'flex justify-end gap-6 w-full '}>
                            <FiltersProductsComponent/>
                        </div>
                    </div>
                </div>
                <CustomTable
                    columnsConfig={COLUMNS_CONFIG}
                    records={productsListByFiltres}
                />
            </div>
            {updateModalIsVisible && selectedProductsListRecord &&
                <UpdateProductModal onClose={toggleUpdateModalIsVisible}/>
            }
        </div>
    );
};

export default ProductsTable;
