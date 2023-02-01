import {GoPrimitiveDot} from "react-icons/go";
import SparkLine from "../components/Charts/SparkLine";
import Stacked from "../components/Charts/Stacked";
import React from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";
import BudgetCard from "../components/BudgetCard";
import {useActions} from "../hooks/use-action";
import {useTypedSelector} from "../hooks/use-typed-selector";
import Expense from "../store/types/Expense";

function getBudgetExpenses(budgetId: string, expenses: Expense[]) {
    return expenses.filter(expense => expense.budgetId === budgetId);
}

const BudgetPlanner = () => {
    const {openExtraPage} = useActions();
    const {budgets, expenses} = useTypedSelector((state) => {
        return state.budget;
    });

    const totalBudget = budgets.reduce((total: number, budget: { max: number; }) => total + budget.max, 0);
    const totalExpenses = expenses.reduce((total: number, expense: { amount: number; }) => total + expense.amount, 0);

    const renderedExpenses = expenses.map((expense: Expense) => {
        return (
            <tr>
                <td>
                    {expense.description}
                </td>
                <td>
                    {expense.amount}
                </td>
            </tr>
        )
    })

    const stackedChartData = [
        [
            {x: 'Jan', y: 111.1},
            {x: 'Feb', y: 127.3},
            {x: 'Mar', y: 143.4},
            {x: 'Apr', y: 159.9},
            {x: 'May', y: 159.9},
            {x: 'Jun', y: 159.9},
            {x: 'July', y: 159.9},
        ],
        [
            {x: 'Jan', y: 111.1},
            {x: 'Feb', y: 127.3},
            {x: 'Mar', y: 143.4},
            {x: 'Apr', y: 159.9},
            {x: 'May', y: 159.9},
            {x: 'Jun', y: 159.9},
            {x: 'July', y: 159.9},
        ],
    ];

    return (
        <>
            <div className="flex gap-10 inline-flex ml-80 mb-5 mt-2 px-10 min-w-full text-center">
                <Button type="button" className="w-1/4" onClick={() => openExtraPage('budget-modal')}>
                    Add Budget
                </Button>
                {
                    budgets.length > 0 && (<Button type="button" className="w-1/4 bg-red-400 hover:bg-red-600 border"
                                                   onClick={() => openExtraPage('expense-modal')}>
                            Add Expense
                        </Button>
                    )
                }

            </div>

            <div className={`grid grid-cols-1 md:grid-cols-${budgets.length > 1 ? 2 : 1} mx-5`}>
                {budgets.map((budget: { id: string; name: string; max: number; }) => {
                    const amount = getBudgetExpenses(budget.id, expenses).reduce((total: any, expense: { amount: any; }) => total + expense.amount, 0);
                    return (
                        <div key={budget.id}>
                            <Panel>
                                <>
                                    <BudgetCard name={budget.name} amount={amount} max={budget.max}/>
                                    <div className="mt-5">
                                        Expenses:
                                        <table className="min-w-full">
                                            <thead className="border-b">
                                                <th>Description</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </thead>
                                            <tbody>
                                            {renderedExpenses}
                                            </tbody>

                                        </table>
                                    </div>
                                </>
                            </Panel>
                        </div>
                    )
                })}
            </div>


            <Panel>
                <>
                    <div className="flex justify-between">
                        <p className="font-semibold text-xl">Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span><GoPrimitiveDot/></span>
                                <span>Expense</span>
                            </p>
                            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                <span><GoPrimitiveDot/></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center">
                        <div className="border-r-1 border-color m-4 pr-12">
                            <div>
                                <p>
                                    <span className="text-3xl font-semibold">${totalBudget}</span>
                                </p>
                                <p className="text-gray-500 mt-1">Budget</p>
                            </div>
                            <div className="mt-8">
                                <p>
                                    <span className="text-3xl font-semibold">${totalExpenses}</span>
                                    <span
                                        className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">{totalExpenses / totalBudget * 100 || 0}% of budget</span>
                                </p>
                                <p className="text-gray-500 mt-1">Expense</p>
                            </div>
                            <div className="mt-5">
                                <SparkLine
                                    currentColor=""
                                    id="line-sparkline"
                                    type="Line"
                                    height="80px"
                                    width="250px"
                                    data={[
                                        {x: 1, yval: 2},
                                        {x: 2, yval: 6},
                                        {x: 3, yval: 8},
                                        {x: 4, yval: 5},
                                        {x: 5, yval: 10},

                                    ]}
                                    color="blue"
                                />
                            </div>
                        </div>
                        <div>
                            <Stacked width="320px" height="360px"
                                     stackedPrimaryXAxis={{
                                         majorGridLines: {width: 0},
                                         minorGridLines: {width: 0},
                                         majorTickLines: {width: 0},
                                         minorTickLines: {width: 0},
                                         interval: 1,
                                         lineStyle: {width: 0},
                                         labelIntersectAction: 'Rotate45',
                                         valueType: 'Category',
                                     }}
                                     stackedPrimaryYAxis={{
                                         lineStyle: {width: 0},
                                         minimum: 100,
                                         maximum: 400,
                                         interval: 100,
                                         majorTickLines: {width: 0},
                                         majorGridLines: {width: 1},
                                         minorGridLines: {width: 1},
                                         minorTickLines: {width: 0},
                                         labelFormat: '{value}',
                                     }}
                                     stackedCustomSeries={[

                                         {
                                             dataSource: stackedChartData[0],
                                             xName: 'x',
                                             yName: 'y',
                                             name: 'Budget',
                                             type: 'StackingColumn',
                                             background: 'blue',

                                         },

                                         {
                                             dataSource: stackedChartData[1],
                                             xName: 'x',
                                             yName: 'y',
                                             name: 'Expense',
                                             type: 'StackingColumn',
                                             background: 'red',

                                         }
                                     ]}
                            />
                        </div>
                    </div>
                </>
            </Panel>
        </>
    )
}

export default BudgetPlanner;