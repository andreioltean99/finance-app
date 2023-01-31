import {ActionType} from "../action-types/budget-types";
import {
    Action,
    AddBudgetAction,
    AddExpenseAction,
    DeleteBudgetAction, DeleteExpenseAction,
    GetBudgetExpensesAction,
} from "../actions/budget-actions";
import {Dispatch} from "redux";
import axios, {csrf} from "../../api/axios";
import {isAxiosError} from "axios";


export const getBudgetExpenses = (budgetId: string): GetBudgetExpensesAction => {
    return {
        type: ActionType.GET_BUDGET_EXPENSES,
        payload: {budgetId}
    }
}

export const addBudget = (userId: string | null, name: string, max: number) => {
    return async (dispatch: Dispatch<Action>) => {
        if (userId) {
            await axios.post('/api/budgets', {userId, name, max});
        }

        dispatch({
            type: ActionType.ADD_BUDGET,
            payload: {name, max}
        });
    }
}

export const addExpense = (budgetId: string, description: string, amount: number): AddExpenseAction => {
    return {
        type: ActionType.ADD_EXPENSE,
        payload: {budgetId, description, amount}
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


