import {useTypedSelector} from "../hooks/use-typed-selector";
import React from "react";
import Portfolio from "../pages/Portfolio";
import Investments from "../pages/Investments";
import BudgetPlanner from "../pages/BudgetPlanner";

const ContentArea = () => {
    const currentPage = useTypedSelector((state) => {
        return state.app.currentPage
    });

    const renderContent = () => {
        switch(currentPage){
            case 'Portfolio':
                return <Portfolio />
            case 'Investments':
                return <Investments />
            case 'Budget Planner':
                return <BudgetPlanner />
            default:
                return <div></div>
        }
    }

    return renderContent();
}

export default ContentArea;