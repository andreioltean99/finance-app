import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import {useTypedSelector} from "../hooks/use-typed-selector";
import React, {useEffect, useState} from "react";
import Disclaimer from "../components/Disclaimer";
import {useActions} from "../hooks/use-action";
import AddBudgetModal from "../components/AddBudgetModal";
import ContentArea from "../components/ContentArea";
import AddExpenseModal from "../components/AddExpenseModal";

const AppLayout = () => {
    const {getUser, getBudgetsAndExpenses} = useActions();
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const {extraPage, auth} = useTypedSelector((state) => {
        return {
            extraPage: state.app.extraPage,
            auth: state.auth
        }
    });

    useEffect( () => {
        if(auth.user && Object.keys(auth.user).length != 0) {
            getUser();
            getBudgetsAndExpenses();
        }else{
            setShowDisclaimer(true);
                 setTimeout(() => {
                   setShowDisclaimer(false);
                }, 7000);
        }
    }, []);

    const renderExtraPage = () => {
        switch (extraPage){
            case 'settings':
                return <Settings />
            case 'profile':
                return <Profile />;
            case 'expense-modal':
                return <AddExpenseModal />
            case 'budget-modal':
                return <AddBudgetModal />
        }
    }

    return (
        <div className="flex relative dark:bg-main-dark-bg">
            <Sidebar/>
            <div className="dark:bg-main-bg bg-main-bg min-h-screen w-full ml-12 flex-2">
                <Navbar/>
                {showDisclaimer && (
                    <Disclaimer> You are using a GUEST account. Please notice that your modifications will be
                        lost
                        after refreshing the page. If you want to keep your data please login with a
                        real account.</Disclaimer>
                )};
                {renderExtraPage()}
                <ContentArea />
            </div>
        </div>
    )
}

export default AppLayout;