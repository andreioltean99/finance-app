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

export const addBudget = (name: string, max: number): AddBudgetAction => {
    return {
        type: ActionType.ADD_BUDGET,
        payload: {name, max}
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


