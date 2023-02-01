import {ActionType} from "../action-types/budget-types";
import {
    Action,
    AddBudgetAction,
    AddExpenseAction,
    DeleteBudgetAction, DeleteExpenseAction,
} from "../actions/budget-actions";
import {Dispatch} from "redux";
import axios, {csrf} from "../../api/axios";
import {isAxiosError} from "axios";
import {v4 as uuid} from 'uuid';
import Expense from "../types/Expense";
import Budget from "../types/Budget";

export const getBudgetsAndExpenses = () => {
    return async (dispatch: Dispatch<Action>) => {
        const {data} = await axios.get('/api/budget');

        let budgets: Budget[] = [];
        let expenses: Expense[] = [];

        data.forEach((element: any) => {
            budgets.push({
                id: element.id,
                name: element.name,
                max: element.max
            })
            if(element.expenses.length){
                element.expenses.forEach((expense: { id: any; budget_id: any; amount: any; description: any; }) => {
                    expenses.push({
                        id: expense.id,
                        budgetId: expense.budget_id,
                        amount: expense.amount,
                        description: expense.description
                    });
                })
            }
        })

        dispatch({
            type: ActionType.GET_BUDGETS_AND_EXPENSES,
            payload: {
                budgets, expenses
            }
        })
    }
}


export const addBudget = (userId: string | null, name: string, max: number) => {
    return async (dispatch: Dispatch<Action>) => {
        const generatedId = uuid();
        if (userId) {
            await axios.post('/api/budget', {
                id: generatedId,
                name: name,
                max: max
            });
        }

        dispatch({
            type: ActionType.ADD_BUDGET,
            payload: {id: generatedId, name, max}
        });
    }
}

export const addExpense = (userId: string, budgetId: string, description: string, amount: number)=> {
    return async (dispatch: Dispatch<Action>) => {
        const generatedId = uuid();
        if (userId) {
            await axios.post('/api/expense', {
                id: generatedId,
                budget_id: budgetId,
                description, amount
            });
        }

        dispatch({
            type: ActionType.ADD_EXPENSE,
            payload: {id: generatedId, budgetId, description, amount}
        })
    }
}

export const deleteBudget = (budgetId: string): DeleteBudgetAction => {
    return {
        type: ActionType.DELETE_BUDGET,
        payload: {budgetId}
    }
}

export const deleteExpense = (expenseId: string): DeleteExpenseAction => {
    return {
        type: ActionType.DELETE_EXPENSE,
        payload: {expenseId}
    }
}


