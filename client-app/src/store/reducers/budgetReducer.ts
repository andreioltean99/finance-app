// import produce from 'immer';
// import {ActionType} from "../action-types";
// import {Action} from '../actions';
// import { v4 as uuidV4 } from 'uuid';
//
// export const appInitialState = {
//    budgets: [],
//     expenses: [],
//
// }
//
// /*
// budgets [{
// id:
// name:
// max:
// }]
//
// expense: [{
// id:
// budgetId:
// amount:
// description:
// }]
//  */
//
// // getBudgetsExpenses
// function getBudgetExpenses(budgetId: string){
// return expenses.filter(expense => expense.budgetId === budgetId)
// }
//
// // addExpense
// function addExpense(description: string, amount: number, budgetid){
//      setBudgets(prevBudgets => {
//          return [...prevBudgets, {id: uuidV4(), description, amount, budgetId }]
//      });
// }
// // adBudget
// function addExpense(name: string, max: number){
//     setBudgets(prevBudgets => {
//         if(prevBudgets.find(budget => budget.name === name)){
//             return prevBudgets;
//         }
//         return [...prevBudgets, {id: uuidV4(), name, max }]
//     });
// }
// // deleteBudget
// function deleteBudget(id){
//     setBudgets(prevBudgets => {
//         return prevBudgets.filter(budget => budget.id !== id)
//     })
// }
// // deleteExpense
// function deleteExpense(id){
//     setBudgets(prevBudgets => {
//         return prevBudgets.filter(budget => budget.id !== id)
//     })
// }
//
// const reducer = produce(
//     (state = appInitialState, action: Action) => {
//         switch(action.type){
//             default:
//                 return state;
//         }
//     }
// )
//
// export default reducer;
export default 1;