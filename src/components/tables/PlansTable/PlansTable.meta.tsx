import {
    TGeneratePlansTableConfigProps, TPlansTable,
} from "./PlansTable.types";
import { TableActionButton } from "@/shared/_ui";
import { dayJsUtcWithoutSeconds } from "@/shared/lib/helpers/DayJs";

export const generateTableConfig = ({
    openUpdateModalHandler,
}: TGeneratePlansTableConfigProps): TPlansTable["columnsConfig"] => {
    return [
        {
            id: "description",
            label: "description",
            renderCell: (cell) => cell.description,
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
            id: "removedAt",
            label: "removed At",
            renderCell: (cell) => dayJsUtcWithoutSeconds(cell.removedAt),
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
