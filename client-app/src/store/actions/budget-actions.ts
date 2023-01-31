import {ActionType} from "../action-types/budget-types";

export interface GetBudgetExpensesAction {
    type: ActionType.GET_BUDGET_EXPENSES;
    payload: {
        budgetId: string
    }
}

export interface AddBudgetAction {
    type: ActionType.ADD_BUDGET;
    payload: {
        name: string;
        max: number;
    }
}

export interface AddExpenseAction {
    type: ActionType.ADD_EXPENSE;
    payload: {
        budgetId: string
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
    GetBudgetExpensesAction
    | AddBudgetAction
    | AddExpenseAction
    | DeleteBudgetAction
    | DeleteExpenseAction

    ;