export type TGenerateTableConfigProps<T> = {
    openUpdateModalHandler?: (cell: T) => void;
    openDeleteModalHandler?: (cell: T) => void;
    openShowLinksCellHandler?: (cell: T) => void;
};
