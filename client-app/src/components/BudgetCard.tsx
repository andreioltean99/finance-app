import React from "react";
import {currencyFormatter} from "../utils";
import Button from "./Button";

interface BudgetCardProps  {
    name: string;
    amount: number;
    max: number;
    gray?: boolean;
}

const BudgetCard: React.FC<BudgetCardProps> = ({name, amount, max, gray}) => {
    const classnames = [];

    if(amount > max){
        classnames.push('bg-red-600', 'bg-opacity-20')
    }else if(gray){
        classnames.push('bg-gray-100')
    }

    let progressBarValue = (amount/max) * 100;
    if(progressBarValue > 100){
        progressBarValue = 100;
    } else if(progressBarValue < 0) {
        progressBarValue = 0;
    }
    return (
        <div className={classnames.join(" ")}>
            <div className="card-body">
                <div className="card-title flex justify-between items-baseline mb-3">
                    <div className="me-2 ">{name}</div>
                    <div className="flex items-baseline">
                        {currencyFormatter.format(amount)}
                       <span className="text-gray-400 text-sm"> &nbsp; / &nbsp; {currencyFormatter.format(max)}</span>
                    </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className={`${getProgressBarVariant(amount, max)} h-2.5 rounded-full`} style={{width: `${progressBarValue}%`}}></div>
                </div>

            </div>
        </div>
    )
}

function getProgressBarVariant(amount: number, max: number){
    const ratio = amount / max;
    if(ratio < .5) return 'bg-blue-600'
    if(ratio < 0.75) return 'bg-yellow-400'
    return 'bg-red-600'
}

export default BudgetCard;