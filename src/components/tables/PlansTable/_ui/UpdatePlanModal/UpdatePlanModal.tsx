import {changeSelectPlanRecord, resetSelectedPlansListRecord, useAppDispatch, usePlansSelector} from "@/redux";
import {IProps, TForm} from "./UpdatePlanModal.types";
import {useFormik} from "formik";
import {Modal} from "@/components";
import {Button} from "@/shared/_ui";
import {FormInput} from "@/shared/_ui/FormInput";

const UpdatePlanModal = ({onClose}: IProps) => {
    const dispatch = useAppDispatch();

    const closeModalHandler = () => {
        onClose();
        dispatch(resetSelectedPlansListRecord());
    };

    const {selectedPlansListRecord} = usePlansSelector();


    const {isValid, dirty, errors, touched, getFieldProps, handleSubmit} =
        useFormik<TForm>({
            initialValues: {
                description:selectedPlansListRecord.description
            },
            onSubmit: (formikValues) => {
                dispatch( changeSelectPlanRecord({...selectedPlansListRecord,...formikValues}))
                onClose();
            },
        });

    return (
        <Modal title="Change plan" onClose={closeModalHandler}>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="description"
                    required
                    error={errors.description}
                    touched={touched.description}
                    {...getFieldProps('description')}
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
