import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Investments from "../pages/Investments";
import BudgetPlanner from "../pages/BudgetPlanner";
import Portfolio from "../pages/Portfolio";
import {Route, Routes} from "react-router-dom";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import {useTypedSelector} from "../hooks/use-typed-selector";
import React from "react";

const AppLayout = () => {
    const {extraPage, auth} = useTypedSelector((state) => {
        return {
            extraPage: state.app.extraPage,
            auth: state.auth
        }
    });

    return (
        <div className="flex relative dark:bg-main-dark-bg">

            <div className="w-16 fixed sidebar dark:bg-secondary-dark-bg bg-white border-r-1 border-zinc-300">
                <Sidebar/>
            </div>

            <div
                className="dark:bg-main-bg bg-main-bg min-h-screen w-full ml-12 flex-2">
                <div className="bg-white border-b-1 border-zinc-300 dark:bg-main-dark-bg navbar w-full">
                    <Navbar/>
                </div>

                { !auth.user &&  (
                    <section className="">
                        <div className="container mx-auto mt-7">
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4">
                                    <div className="
                        relative
                        mx-auto
                        overflow-hidden
                        rounded-lg
                        bg-orange-200
                        py-5
                        px-10
                        text-center
                        sm:px-12
                        md:px-[60px]
                        ">
                                        You are using a GUEST account. Please notice that your modifications will be lost
                                        after refreshing the page. If you want to keep your data please login with a real account.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) }


                <div>
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

        </div>
    )
}

export default AppLayout;