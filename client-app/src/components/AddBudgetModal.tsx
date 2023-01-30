import React, {useRef} from "react";
import {useActions} from "../hooks/use-action";
import Input from "./Auth/Input";
import Button from "./Auth/Button";

interface AddBudgetModalProps {
    show: boolean;
    handleClose: () => void
}

const AddBudgetModal: React.FC<AddBudgetModalProps> = ({show, handleClose}) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);
    // const {addBudget} = useActions()

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nameRef.current && maxRef.current) {
            // addBudget({
            //     name: nameRef.current.value,
            //     max: parseFloat(maxRef.current.value)
            // });
        }
        handleClose();

    }
    return (
        <div id="defaultModal" tabIndex={1} aria-hidden="true"
             className={`fixed top-0 left-0 right-0 z-50 ${show ? '' : 'hidden'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
            <div className="relative w-full h-full max-w-2xl md:h-auto">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            New Budget
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <Input type="text" id="name" ref={nameRef} required/>

                            <label htmlFor="max">Maximum Spending</label>
                            <Input type="number" min={0} step={0.1} id="max" ref={maxRef} required/>
                        </form>

                    </div>

                    <div className="flex flex-row-reverse p-6  border-t border-gray-200 rounded-b dark:border-gray-600 ">
                        <Button type="submit" className="">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBudgetModal;