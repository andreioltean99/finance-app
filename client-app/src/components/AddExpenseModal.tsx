import React, {useRef, useState} from "react";
import {useActions} from "../hooks/use-action";
import Input from "./Auth/Input";
import Button from "./Auth/Button";
import CloseExtraPage from "./CloseExtraPage";
import {useTypedSelector} from "../hooks/use-typed-selector";

const AddExpenseModal: React.FC = () => {
    const {budgets, user} = useTypedSelector((state) => {
        return {
            budgets: state.budget.budgets,
            user: state.auth.user
        };
    });

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [budgetId, setBudgetId] = useState(budgets[0].id);
    const {addExpense, closeExtraPage} = useActions();



    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        addExpense(user?.id, budgetId, description, parseFloat(amount));
        closeExtraPage();
    }
    return (
        <div className="bg-gray-600  bg-opacity-50 w-screen h-screen fixed nav-item top-0 right-0">
            <div id="defaultModal" tabIndex={1} aria-hidden="true"
                 className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full h-screen flex justify-center items-center`}>
                <div className="relative w-full h-full max-w-2xl md:h-auto">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                New Expense
                            </h3>
                            <CloseExtraPage />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6 space-y-6">
                                <label htmlFor="description">Description</label>
                                <Input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)}
                                       required/>

                                <label htmlFor="amount">Maximum Spending</label>
                                <Input type="number" min={0} step={0.1} id="amount" value={amount}
                                       onChange={e => setAmount(e.target.value)} required/>

                                <select value={budgetId} onChange={(e) => {setBudgetId(e.target.value)} }>
                                    {
                                        budgets.map((budget: { id: React.Key |string; name: string; }) => {
                                            return (
                                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div
                                className="flex flex-row-reverse p-6  border-t border-gray-200 rounded-b dark:border-gray-600 ">
                                <Button type="submit" className="">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExpenseModal;