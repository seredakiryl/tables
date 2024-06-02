'use client'
import {Button} from "@/shared/_ui";
import {FunnelIcon} from "@/shared/assets/svg";
import {FormInput} from "@/shared/_ui/FormInput";
import {useFormik} from "formik";
import {TForm} from "./FilterPlansComponent.types";
import {StatusSelect} from "@/components/selects/StatusSelect";
import {setFiltersPlansRecord, useAppDispatch} from "@/redux";

const FilterPlansComponent = () => {

    const dispatch = useAppDispatch();

    const {isValid, dirty, errors, setFieldValue, touched, getFieldProps, handleSubmit} =
        useFormik<TForm>({
            initialValues: {
                value: '',
                isActive: null,
            },
            // validationSchema,
            onSubmit: (formikValues) => {
                dispatch(setFiltersPlansRecord({...formikValues, value: formikValues.value.trimStart().trimEnd()}))
            },
        });


    return (
        <form onSubmit={handleSubmit} className={'flex gap-4 items-center'}>
            <FormInput
                required
                error={errors.value}
                touched={touched.value}
                {...getFieldProps('value')}
            />
            <StatusSelect onChange={(value) => {
                setFieldValue('isActive', value)
            }}/>
            <Button red leftIcon={<FunnelIcon/>}>Filter</Button>
        </form>
    )
}

export default FilterPlansComponent