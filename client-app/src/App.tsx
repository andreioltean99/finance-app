import React, {useEffect} from 'react';
import './styles/css/App.css';
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import {useTypedSelector} from "./hooks/use-typed-selector";
import {useActions} from "./hooks/use-action";

function App() {
    const {getUser} = useActions();
    const auth = useTypedSelector((state) => {
        return state.auth;
    });

    useEffect( () => {
        window.history.replaceState(null, '', '/');
         getUser();
    }, []);
    //
    // if(auth.loading){
    //     return <div></div>
    //
    // }

    return auth.user || auth.guest ? <AppLayout /> : <AuthLayout />
}

export default App;
