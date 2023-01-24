import {Link, NavLink} from "react-router-dom";
import {BsWallet2} from "react-icons/bs";
import {AiOutlineStock} from "react-icons/ai";
import {RiStockLine} from "react-icons/ri";
import {GiMoneyStack} from "react-icons/gi";
import React, {useState} from "react";
import {FiSettings} from "react-icons/fi";

const Sidebar = () => {
    const [activeId, setActiveId] = useState(null);

    return (
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
                    <div className="mt-8">
                        <Link
                            to="/"
                            id="portfolioBtn"
                            onClick={(e) => {console.log(e.currentTarget.id)} }
                            className="text-slate-900"
                        >
                            <div className={`rounded p-3 mr-2 hover:bg-blue-200 `}>
                                <BsWallet2 size={20}/>
                            </div>
                        </Link>

                    </div>
                    <div className="mt-8">

                        <Link
                            to="/investments"
                            className="text-slate-900"
                        >
                            <div className="rounded p-3 mr-2 hover:bg-blue-200">
                                <RiStockLine size={20}/>
                            </div>
                        </Link>

                    </div>
                    <div className="mt-8">

                        <Link
                            to="/budget-planner"
                            className="text-slate-900"
                        >
                            <div className="rounded p-3 mr-2 hover:bg-blue-200">
                                <GiMoneyStack size={20}/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="fixed left-2 bottom-6">

                    <Link
                        to="/"
                        onClick={() => {
                        }}
                        className="text-slate-900"
                    >
                        <div className="rounded p-3 hover:bg-blue-200">
                            <FiSettings size={20}/>
                        </div>
                    </Link>

                </div>
            </>
        </div>
    )
}

export default Sidebar;