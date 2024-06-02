import {
    changeSelectPlanRecord, changeSelectProductRecord,
    resetSelectedPlansListRecord, resetSelectedProductsListRecord,
    useAppDispatch,
    usePlansSelector,
    useProductsSelector
} from "@/redux";
import {IProps, TForm} from "./UpdateProductModal.types";
import {useFormik} from "formik";
import {Modal} from "@/components";
import {Button} from "@/shared/_ui";
import {FormInput} from "@/shared/_ui/FormInput";

const UpdatePlanModal = ({onClose}: IProps) => {
    const dispatch = useAppDispatch();

    const closeModalHandler = () => {
        onClose();
        dispatch(resetSelectedProductsListRecord());
    };

    const {selectedProductsListRecord} = useProductsSelector();
console.log(selectedProductsListRecord)

    const {isValid, dirty, errors, touched, getFieldProps, handleSubmit} =
        useFormik<TForm>({
            initialValues: {
             name:selectedProductsListRecord.name
            },
            onSubmit: (formikValues) => {
                dispatch( changeSelectProductRecord({...selectedProductsListRecord,...formikValues}))
                onClose();
            },
        });

    return (
        <Modal title="Change plan" onClose={closeModalHandler}>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="description"
                    required
                    error={errors.name}
                    touched={touched.name}
                    {...getFieldProps('name')}
                />
                <div className="flex justify-end mt-4 gap-4">
                    <Button type={'button'} secondary onClick={closeModalHandler}>
                        Сancel
                    </Button>
                    <Button
                        red
                        type="submit"
                        disabled={!isValid || !dirty }
                    >
                        Save
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdatePlanModal;
