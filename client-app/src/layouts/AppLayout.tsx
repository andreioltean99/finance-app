import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Investments from "../pages/Investments";
import BudgetPlanner from "../pages/BudgetPlanner";
import Portfolio from "../pages/Portfolio";
import {Route, Routes} from "react-router-dom";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import {useTypedSelector} from "../hooks/use-typed-selector";
import React, {useEffect} from "react";
import Disclaimer from "../components/Disclaimer";
import {useActions} from "../hooks/use-action";

const AppLayout = () => {
    const {getUser} = useActions();
    const {extraPage, auth} = useTypedSelector((state) => {
        return {
            extraPage: state.app.extraPage,
            auth: state.auth
        }
    });

    useEffect( () => {
        if(auth.user && Object.keys(auth.user).length === 0) {
            getUser();
        }
    }, []);

    return (
        <div className="flex relative dark:bg-main-dark-bg">
            <Sidebar/>
            <div className="dark:bg-main-bg bg-main-bg min-h-screen w-full ml-12 flex-2">
                <Navbar/>
                {!auth.user && (
                    <Disclaimer> You are using a GUEST account. Please notice that your modifications will be
                        lost
                        after refreshing the page. If you want to keep your data please login with a
                        real account.</Disclaimer>
                )}

                {extraPage === 'settings' ? <Settings/> : ''}
                {extraPage === 'profile' ? <Profile/> : ''}
                <Routes>
                    <Route path="/" element={<Portfolio/>}/>
                    <Route path="/investments" element={<Investments/>}/>
                    <Route path="/budget-planner" element={<BudgetPlanner/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AppLayout;