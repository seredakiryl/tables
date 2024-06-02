import { ICustomTable } from '@/shared/_ui/CustomTable';
import {TGenerateTableConfigProps, TPlansListItem} from '@/shared/types';

export type TPlansTable = ICustomTable<TPlansListItem>;

export type TGeneratePlansTableConfigProps =
  TGenerateTableConfigProps<TPlansListItem>;

