import {EditIcon} from "@/shared/assets/svg";
import React from "react";

const TableActionButton = <T, >({
                                    actionType,
                                    record,
                                    clickHandler,
                                    className,
                                    widthIcon,
                                    heightIcon
                                }: TableActionButton<T>) => {
    return (
        <button
            className={className ? className : `py-1 px-2 pl-0`}
            onClick={(e) => {
                e.stopPropagation();
                clickHandler(record);
            }}
        >
            {actionType === 'update' &&
                <div className={`${className} flex items-center text-white gap-1.5`}>
                    <EditIcon
                        width={widthIcon} height={heightIcon}
                    />Change
                </div>}
        </button>
    );
};

export default TableActionButton;
