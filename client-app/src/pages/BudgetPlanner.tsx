import {GoPrimitiveDot} from "react-icons/go";
import {Sparkline} from "@syncfusion/ej2-react-charts";
import SparkLine from "../components/Charts/SparkLine";
import Stacked from "../components/Charts/Stacked";

const BudgetPlanner = () => {
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
        <div className="mt-12">
            <div className="flex gap-10 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:  m-3 p-4 rounded-2xl md:w-780">
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
                        <div className="border-r-1 border-color m-4 pr-10">
                            <div>
                                <p>
                                    <span className="text-3xl font-semibold">$93,438</span>
                                    <span
                                        className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                                </p>
                                <p className="text-gray-500 mt-1">Budget</p>
                            </div>
                            <div className="mt-8">
                                <p>
                                    <span className="text-3xl font-semibold">$48,438</span>
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
                </div>

            </div>
        </div>
    )
}

export default BudgetPlanner;