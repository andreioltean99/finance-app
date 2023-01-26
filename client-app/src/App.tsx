import React from 'react';
import './styles/css/App.css';
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import {useTypedSelector} from "./hooks/use-typed-selector";

function App() {

    const auth = useTypedSelector((state) => {
        return state.auth;
    });

    console.log(auth);



    let layout;
    if (auth.user || auth.guest) {
        layout = <AppLayout/>
    } else {
        layout = <AuthLayout/>
    }

    return layout;
}

export default App;
