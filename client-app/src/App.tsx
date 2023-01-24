import React from 'react';
import './styles/css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Portfolio from "./pages/Portfolio";
import Investments from "./pages/Investments";
import BudgetPlanner from "./pages/BudgetPlanner";

function App() {
    const activeMenu = true;
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">

                    <div className="w-16 fixed sidebar dark:bg-secondary-dark-bg bg-white border-r-1 border-zinc-300">
                        <Sidebar/>
                    </div>

                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ml-12 ${activeMenu ? '' : ' flex-2'}`}>
                        <div className="bg-white border-b-1 border-zinc-300 dark:bg-main-dark-bg navbar w-full">
                            <Navbar/>
                        </div>


                        <div>
                            <Routes>
                                <Route path="/" element={<Portfolio/>}/>
                            </Routes>
                            <Routes>
                                <Route path="/investments" element={<Investments/>}/>
                            </Routes>
                            <Routes>
                                <Route path="/budget-planner" element={<BudgetPlanner/>}/>
                            </Routes>
                        </div>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
