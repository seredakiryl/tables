
import type { ReactNode } from 'react';
import {deepKeyof} from "@/shared/types";


export type ICustomTableColumnConfig<T> = {
  id: deepKeyof<T> | 'ui-actions';
  label: string;
  renderCell: (cell: T) => ReactNode;
  maxWidth?: string;
};

export type ICustomTable<T> = {
  columnsConfig: Array<ICustomTableColumnConfig<T>>;
  isLoading?: boolean;
  records?: Array<T>;
  onRecordClick?: (record: T) => void;
};
