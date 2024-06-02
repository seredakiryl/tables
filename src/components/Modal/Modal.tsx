import {TModalProps} from "@/components";
import {CrossIcon} from "@/shared/assets/svg/Cross";

const Modal = ({children, title, onClose,width}: TModalProps) => {
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-20 bg-gray-900 z-[32]"
        >
            <div
                className={` h-fit overflow-y-auto relative bg-background  ${width ?width :'max-w-[40rem]  w-1/2'} rounded-xl h-1/2 max-h-1/2 overflow-hidden`}
            >
                <div
                    className={`flex justify-between items-center  z-[32] fixed h-[72px]  bg-background p-5 pl-6 rounded-t-xl ${width ?width :'max-w-[40rem]  w-1/2'} border-b-[1px]  border-[1px]  border-strokeDark `}
                >
                    <div className="font-semibold  leading-[26px] text-[22px] ">{title}</div>
                    <button className="float-right" onClick={onClose}>
                        <CrossIcon/>
                    </button>
                </div>
                <div
                    className="  bg-background p-6 mt-[60px] rounded-xl border-[1px]  border-strokeDark">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
