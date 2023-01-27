import React, {useEffect, useState} from "react";
import Panel from "../../components/Auth/Panel";
import Input from "../../components/Auth/Input";
import Button from "../../components/Auth/Button";
import {useActions} from "../../hooks/use-action";
import {useTypedSelector} from "../../hooks/use-typed-selector";
import {Link, useBeforeUnload} from "react-router-dom";



const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login, guestLogin, resetAuthErrors, getUser} = useActions();
    const errors = useTypedSelector((state) => {
        return state.auth.errors;
    });

    useEffect(() => {
        if(errors) {
            resetAuthErrors();
        }
    }, [])

    const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <Panel>
            <>
                <div className="mb-10 text-center font-bold">Login</div>
                <form onSubmit={handleLogin}>
                    <Input type="email" value={email} placeholder="Email" errors={errors?.email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                    <Input type="password" value={password} placeholder="Password" errors={errors?.password}
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}/>

                    <Button type="submit">Login</Button>

                </form>
                <Link to="/forgot-password"
                      className=" mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline cursor-pointer"
                >Forgot Password?</Link>
                <div>
                    <p className="text-base text-[#adadad] inline-block px-3"> Not a member yet?</p>
                    <Link to='/register'

                          className="text-primary hover:underline cursor-pointer"
                    >Sign Up</Link>
                </div>
                <Button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-600 mt-16"
                    onClick={() => {
                        guestLogin()
                    }}
                >Login as GUEST</Button>
            </>
        </Panel>
    )
}

export default Login;