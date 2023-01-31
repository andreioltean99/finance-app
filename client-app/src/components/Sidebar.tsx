import {Link} from "react-router-dom";
import {BsWallet2} from "react-icons/bs";
import {AiOutlineStock} from "react-icons/ai";
import {RiStockLine} from "react-icons/ri";
import {GiMoneyStack} from "react-icons/gi";
import React from "react";
import {FiSettings} from "react-icons/fi";
import {useActions} from "../hooks/use-action";
import {useTypedSelector} from "../hooks/use-typed-selector";

const Sidebar = () => {
    const {openExtraPage} = useActions();
    const currentPage = useTypedSelector((state) => {
        return state.app.currentPage;
    });
    const {setCurrentPage} = useActions();
    const activeClass = 'bg-indigo-500 text-white hover:text-white';
    const inactiveClass = 'text-slate-900';

    return (
        <div className="w-16 fixed sidebar dark:bg-secondary-dark-bg bg-white border-r-1 border-zinc-300">
            <div className="ml-2 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            to="/"
                            className="items-center gap-3 ml-1 mt-5  text-xl font-extrabold  dark:text-white text-slate-900"
                        >
                            <AiOutlineStock size={40}/>
                        </Link>
                    </div>
                    <div className="">
                        <div className="mt-8 ">
                            <Link
                                to="/"
                                onClick={(e) => {
                                    setCurrentPage('Portfolio');
                                }}
                                className="text-slate-900"
                            >
                                <div
                                    className={`rounded p-3 mr-2 hover:${activeClass} ${currentPage === 'Portfolio' ? activeClass : inactiveClass}`}>
                                    <BsWallet2 size={20}/>
                                </div>
                            </Link>

                        </div>
                        <div className="mt-8">

                            <Link
                                to="/investments"
                                className="text-slate-900"
                                onClick={(e) => {
                                    setCurrentPage('Investments');
                                }}
                            >
                                <div
                                    className={`rounded p-3 mr-2 hover:${activeClass} ${currentPage === 'Investments' ? activeClass : inactiveClass}`}>
                                    <RiStockLine size={20}/>
                                </div>
                            </Link>

                        </div>
                        <div className="mt-8">

                            <Link
                                to="/budget-planner"
                                className="text-slate-900"
                                onClick={(e) => {
                                    setCurrentPage('Budget Planner');
                                }}
                            >
                                <div
                                    className={`rounded p-3 mr-2 hover:${activeClass} ${currentPage === 'Budget Planner' ? activeClass : inactiveClass}`}>
                                    <GiMoneyStack size={20}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="fixed left-2 bottom-6 text-slate-900"
                         onClick={() => {
                             openExtraPage('settings')
                         }}>
                        <div className="rounded p-3 hover:bg-indigo-500">
                            <FiSettings size={20}/>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Sidebar;