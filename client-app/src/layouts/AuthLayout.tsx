import Login from "../pages/Auth/Login";
import {Route, Routes} from "react-router-dom";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";

const AuthLayout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />}/>
                <Route path="/forgot-password" element={<ForgotPassword />}/>
            </Routes>
        </div>
    )
}

export default AuthLayout;