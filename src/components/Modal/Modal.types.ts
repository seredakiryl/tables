import { ReactNode } from 'react';

export type TModalProps = {
  title?: string;
  children?: ReactNode;
  width?:string
  onClose: () => void;
};
