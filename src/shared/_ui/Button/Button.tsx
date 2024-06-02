import classNames from "classnames";
import {FC} from "react";
import {IButtonProps} from "@/shared/_ui/Button/Button.types";


const Button: FC<IButtonProps> = ({
                                      children,
                                      red,
                                      secondary,
                                      disabled,
                                      className,
                                      onClick,
                                      type,
                                      leftIcon,
                                      rightIcon
                                  }) => {


    const classes = classNames("text-white rounded-lg py-[14px] px-[26px] h-[48px] flex items-center", {
                "bg-brand-600 hover:bg-brand-700  ": red && !disabled,
                " bg-transparenceBase-10 ": secondary && !disabled,
                "opacity-30 bg-brand-600 ": red && disabled,
                "cursor-pointer": !disabled,
            },
            className,
        )
    ;

    const childrenStyle = classNames('flex gap-3 items-center ', {
        "opacity-50": disabled,
    });

    return <button className={classes} disabled={disabled} type={type} onClick={onClick}>
        <div className={childrenStyle}>
            {leftIcon ? (<div className='w-6 h-6 flex justify-center items-center  '>
                {leftIcon}
            </div>) : null}
            <span className="flex-1 font-Roboto font-medium">{children}</span>
            {rightIcon ? (<div className='w-6 h-6'>
                {rightIcon}
            </div>) : null}
        </div>
    </button>;
}

export default Button;


// "border-matisse-600 bg-matisse-600 text-white hover:border-matisse-800 hover:bg-matisse-800": primary && !disabled,
// "border-matisse-600 bg-matisse-600 text-white": primary && disabled,
//
// "border-dark-75 bg-dark-75 text-black hover:border-dark-200 hover:bg-dark-200": grey && !disabled,
// "border-dark-75 bg-dark-75 text-black": grey && disabled,
//
// "text-matisse-600 bg-matisse-100 border-[0px] hover:border-matisse-800 hover:text-matisse-800": secondary && !disabled,
// "text-matisse-600 bg-matisse-100  border-[0px]": secondary && disabled,
// "border-cardinal-200 bg-cardinal-200 text-cardinal-700 hover:border-cardinal-800 hover:bg-cardinal-800 hover:text-white": warning && !disabled,
// "border-cardinal-400 bg-cardinal-400 text-white": warning && disabled,