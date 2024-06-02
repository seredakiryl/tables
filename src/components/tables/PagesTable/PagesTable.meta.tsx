import {
    TGeneratePagesTableConfigProps,
    TPagesTable
} from "./PagesTable.types";
import {TableActionButton} from "@/shared/_ui";
import {dayJsUtcWithoutSeconds} from "@/shared/lib/helpers/DayJs";

export const generateTableConfig = ({
                                        openUpdateModalHandler,
                                    }: TGeneratePagesTableConfigProps): TPagesTable["columnsConfig"] => {
    return [
        {
            id: "title",
            label: "title",
            renderCell: (cell) => cell.title,
        },
        {
            id: "active",
            label: "status",
            renderCell: (cell) => cell.active ? 'active' : 'inactive',
        },
        {
            id: "publishedAt",
            label: "published At",
            renderCell: (cell) => dayJsUtcWithoutSeconds(cell.publishedAt),
        },
        {
            id: "updatedAt",
            label: "updated At",
            renderCell: (cell) => dayJsUtcWithoutSeconds(cell.updatedAt),
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
