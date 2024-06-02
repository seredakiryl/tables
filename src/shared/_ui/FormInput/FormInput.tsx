'use client'
import {IFormInputProps} from './FormInput.types';

const FormInput = ({
                       label,
                       value = '',
                       touched,
                       error,
                       required,
                       dark = true,
                       name,
                       onChange,

                       ...restProps
                   }: IFormInputProps) => {

    const formattedValue = value === null ? '' : value;


    return (
        <div
            className={`w-full  self-stretch text-white not-italic text-base/[22px] font-normal`}>
            {label ? (
                <span className={'self-stretch text-white not-italic text-base/[22px] font-normal'}>
          {label} {required && <span className="text-rose-600"> *</span>}
        </span>
            ) : null}
            <input
                className={`!form-input  font-semibold min-w-full py-[13px] px-[16px] text-black`}
                {...restProps}
                name={name}
                value={formattedValue}
                onChange={(event) => {
                    const customEvent = {
                        ...event,
                        target: {
                            ...event?.target,
                            name,
                            value: event.target.value,
                        },
                    } as unknown as React.ChangeEvent<HTMLInputElement>;
                    onChange(customEvent)
                }}
            />
            {error && touched ? <span className="text-informationRed mt-[7px] ">{error}</span> : null}
        </div>
    );
};

export default FormInput;
