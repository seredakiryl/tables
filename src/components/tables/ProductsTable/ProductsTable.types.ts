import { ICustomTable } from '@/shared/_ui/CustomTable';
import {TGenerateTableConfigProps, TProductsListItem} from '@/shared/types';

export type TProductsTable = ICustomTable<TProductsListItem>;

export type TGenerateProductsTableConfigProps =
  TGenerateTableConfigProps<TProductsListItem>;

