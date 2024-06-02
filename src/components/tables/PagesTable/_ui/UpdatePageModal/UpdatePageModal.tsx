import {
    changeSelectPageRecord,
    changeSelectPlanRecord, resetSelectedPagesListRecord,
    resetSelectedPlansListRecord,
    useAppDispatch,
    usePagesSelector,
} from "@/redux";
import {IProps, TForm} from "./UpdatePageModal.types";
import {useFormik} from "formik";
import {Modal} from "@/components";
import {Button} from "@/shared/_ui";
import {FormInput} from "@/shared/_ui/FormInput";

const UpdatePageModal = ({onClose}: IProps) => {
    const dispatch = useAppDispatch();

    const closeModalHandler = () => {
        onClose();
        dispatch(resetSelectedPagesListRecord());
    };

    const {selectedPagesListRecord} = usePagesSelector();


    const {isValid, dirty, errors, touched, getFieldProps, handleSubmit} =
        useFormik<TForm>({
            initialValues: {
                title: selectedPagesListRecord.title
            },
            onSubmit: (formikValues) => {
                dispatch(changeSelectPageRecord({...selectedPagesListRecord, ...formikValues}))
                onClose();
            },
        });

    return (
        <Modal title="Change plan" onClose={closeModalHandler}>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="description"
                    required
                    error={errors.title}
                    touched={touched.title}
                    {...getFieldProps('title')}
                />
                <div className="flex justify-end mt-4 gap-4">
                    <Button type={'button'} secondary onClick={closeModalHandler}>
                        Сancel
                    </Button>
                    <Button
                        red
                        type="submit"
                        disabled={!isValid || !dirty}
                    >
                        Save
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdatePageModal;
