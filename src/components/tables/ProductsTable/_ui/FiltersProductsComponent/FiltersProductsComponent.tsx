'use client'
import {Button} from "@/shared/_ui";
import {FunnelIcon} from "@/shared/assets/svg";
import {FormInput} from "@/shared/_ui/FormInput";
import {useFormik} from "formik";
import {TForm} from "./FiltersProductsComponent.types";
import {StatusSelect} from "@/components/selects/StatusSelect";
import {setFiltersProductsRecord, useAppDispatch} from "@/redux";

const FiltersProductsComponent = () => {

    const dispatch = useAppDispatch();

    const {isValid, dirty, errors, setFieldValue, touched, getFieldProps, handleSubmit} =
        useFormik<TForm>({
            initialValues: {
                value: '',
                isActive: null,
            },
            // validationSchema,
            onSubmit: (formikValues) => {
                dispatch(setFiltersProductsRecord({...formikValues, value: formikValues.value.trimStart().trimEnd()}))
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
export default FiltersProductsComponent