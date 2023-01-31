import produce from 'immer';
import {ActionType} from "../action-types/budget-types";
import {Action} from '../actions/budget-actions';
import Budget from "../types/Budget";
import Expense from "../types/Expense";
import { v4 as uuid } from 'uuid';

interface budgetInitialState {
    budgets: Budget[] | [],
    expenses: Expense[] | [],
}

export const budgetInitialState: budgetInitialState = {
    budgets: [],
    expenses: [],
}

const reducer = produce(
    (state = budgetInitialState, action: Action) => {
        switch (action.type) {
            case ActionType.GET_BUDGET_EXPENSES:
                state.expenses.filter((expense: { budgetId: string; }) => expense.budgetId === action.payload.budgetId)
                return state;
            case ActionType.ADD_BUDGET:
                state.budgets = [...state.budgets, {id: uuid(), name: action.payload.name, max: action.payload.max}]
                return state;
            case ActionType.ADD_EXPENSE:
                state.expenses = [...state.expenses, {
                    id: uuid(),
                    description: action.payload.description,
                    amount: action.payload.amount,
                    budgetId: action.payload.budgetId
                }];
                return state;
            case ActionType.DELETE_BUDGET:
                state.budgets = state.budgets.filter((budget: { id: string; }) => budget.id !== action.payload.budgetId)
                return state;
            case ActionType.DELETE_EXPENSE:
                state.expenses = state.expenses.filter((expense: { id: string; }) => expense.id !== action.payload.expenseId)
                return state;
            default:
                return state;
        }
    }
)

export default reducer;
