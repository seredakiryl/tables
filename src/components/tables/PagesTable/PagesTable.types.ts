import { ICustomTable } from '@/shared/_ui/CustomTable';
import {TGenerateTableConfigProps, TPagesListItem} from '@/shared/types';

export type TPagesTable = ICustomTable<TPagesListItem>;

export type TGeneratePagesTableConfigProps =
  TGenerateTableConfigProps<TPagesListItem>;

