import {TPagesListItem} from "@/shared/types";

export type TPagesState = {
    selectedPagesListRecord?: TPagesListItem ;
    pagesList: Array<TPagesListItem>
    filtersPages: {
        value: string,
        isActive: boolean | null
    },
};

