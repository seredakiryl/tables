import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IFormInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  withoutMargin?:string
  label?: string;
  error?: string | Array<string>;
  touched?: boolean;
  dark?: boolean;
}
