import {
    TGenerateProductsTableConfigProps, TProductsTable,
} from "./ProductsTable.types";
import {dayJsUtcWithoutSeconds} from "@/shared/lib/helpers/DayJs";
import {TableActionButton} from "@/shared/_ui";

export const generateTableConfig = ({
                                        openUpdateModalHandler,
                                    }: TGenerateProductsTableConfigProps): TProductsTable["columnsConfig"] => {
    return [
        {
            id: "name",
            label: "name",
            renderCell: (cell) => cell.name,
        },
        {
            id: "active",
            label: "status",
            renderCell: (cell) => cell.active ? 'active' : 'inactive',
        },
        {
            id: "createdAt",
            label: "created At",
            renderCell: (cell) => dayJsUtcWithoutSeconds(cell.createdAt),
        },
        {
            id: "options",
            label: "options",
            renderCell: (cell) => <div className={'flex flex-col'}>
                <div>{`Size : ${cell.options.size}`}</div>
                <div>{`Amount : ${cell.options.amount}`}</div>
            </div>,
        },
        {
            id: "ui-actions",
            label: "actions",
            renderCell: (cell) => (
                <div className="flex justify-start items-center gap-x-2">
                    <TableActionButton
                        actionType="update"
                        record={cell}
                        clickHandler={openUpdateModalHandler}
                    />
                </div>
            ),
        },
    ];
};

//
// id: number;
// name: string;
// options: {
//     size: string,
//         amount: number
// }
// active: boolean,
// createdAt: string