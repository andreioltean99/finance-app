import Login from "../pages/Auth/Login";
import {Route, Routes} from "react-router-dom";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import {useState} from "react";

const AuthLayout = () => {
    const [component, setComponent] = useState('login');
    const showComponent = (currentComponent: string) => {
        setComponent(currentComponent);
    }

    let renderComponent;
    switch(component){
        case 'register':
            renderComponent= <Register showComponent = {showComponent} />
            break;
        case 'forgot-password':
            renderComponent = <ForgotPassword showComponent={showComponent} />
        break;
        default:
            renderComponent = <Login showComponent={showComponent}/>
            break;
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={renderComponent}/>
                <Route path="/password-reset/:token" element={<ResetPassword />}/>
            </Routes>
        </div>
    )
}

export default AuthLayout;