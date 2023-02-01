import {ActionType} from "../action-types/budget-types";
import Budget from "../types/Budget";
import Expense from "../types/Expense";

export interface GetBudgetsAndExpensesAction {
    type: ActionType.GET_BUDGETS_AND_EXPENSES;
    payload: {
       budgets: Budget[] | [];
       expenses: Expense[] | [];
    }
}

export interface AddBudgetAction {
    type: ActionType.ADD_BUDGET;
    payload: {
        id: string;
        name: string;
        max: number;
    }
}

export interface AddExpenseAction {
    type: ActionType.ADD_EXPENSE;
    payload: {
        id: string;
        budgetId: string;
        description: string;
        amount: number;
    }
}

export interface DeleteBudgetAction {
    type: ActionType.DELETE_BUDGET;
    payload: {
        budgetId: string;
    }
}

export interface DeleteExpenseAction {
    type: ActionType.DELETE_EXPENSE;
    payload: {
        expenseId: string;
    }
}



export type Action =
     AddBudgetAction
    | AddExpenseAction
    | DeleteBudgetAction
    | DeleteExpenseAction
    | GetBudgetsAndExpensesAction
    ;