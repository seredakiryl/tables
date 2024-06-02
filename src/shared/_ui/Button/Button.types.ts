import {ButtonHTMLAttributes, ReactNode} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    red?: boolean
    secondary?:boolean
    disabled?: boolean
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    className?: string

}
