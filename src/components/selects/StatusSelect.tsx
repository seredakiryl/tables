'use client'

import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), {ssr: false});

export const StatusSelect = ({onChange}) => {

    const FILTER_OPTIONS = [
        {value: false, label: 'Inactive'},
        {value: true, label: 'Active'},
        {value: null, label: 'All Status'}
    ]

    return (
        <Select options={FILTER_OPTIONS}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: 7,
                        minHeight: 46,
                        background: '#888888',
                        width: '150px',
                        color: '#fff',
                        outline: 'none'
                    }),
                    option: (base, state) => ({
                        ...base,
                        background: '#888888',
                    }),

                    placeholder: (defaultStyles) => ({
                        ...defaultStyles,
                        color: '#fff',
                    }),

                    menu: (base, state) => ({
                            ...base,
                            background: '#888888',
                        }
                    ),

                }}
                onChange={(item: { value: boolean, label: string }) => {
                    onChange(item.value)
                }}
        />
    )
}