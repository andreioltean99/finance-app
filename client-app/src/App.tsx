import React, {useState} from 'react';
import './styles/css/App.css';
import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Portfolio from "./pages/Portfolio";
import Investments from "./pages/Investments";
import BudgetPlanner from "./pages/BudgetPlanner";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Settings from "./pages/Settings";

function App() {
    const activeMenu = true;
    const [settingsPage, setSettingsPage] = useState(true);

    const handleSettingsClose = () => {
        setSettingsPage(false);
    }
    return (
        <div>

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
                            {settingsPage && <Settings onClose={handleSettingsClose} /> }
                            <Routes>
                                <Route path="/" element={<Portfolio/>}/>
                                <Route path="/investments" element={<Investments/>}/>
                                <Route path="/budget-planner" element={<BudgetPlanner/>}/>
                                <Route path="/login" element={<Login />}/>
                                <Route path="/register" element={<Register />}/>
                                <Route path="/profile" element={<Profile />}/>
                                <Route path="/forgot-password" element={<ForgotPassword />}/>
                                <Route path="/password-reset/:token" element={<ResetPassword />}/>
                            </Routes>
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default App;
