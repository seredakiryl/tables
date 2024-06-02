export type TProductsListItem = {
    id: number;
    name: string;
    options: {
        size: string,
        amount: number
    }
    active: boolean,
    createdAt: string
}

