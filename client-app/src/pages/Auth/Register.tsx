import {Link, useNavigate} from "react-router-dom";
import axios from '../../api/axios';
import React, {useState} from "react";
import Panel from "../../components/Auth/Panel";
import AuthError from "../../components/Auth/AuthError";
import {isAxiosError} from "axios";
import Input from "../../components/Auth/Input";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState<AuthError>({});
    const navigate = useNavigate();

    const handleRegister = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name, email, password, password_confirmation: passwordConfirmation
            });
            setName('');
            setEmail('');
            setPassword('');
            setPasswordConfirmation('');
            navigate('/');
        } catch (error) {
            if (isAxiosError(error)) {
                setErrors(error.response?.data.errors);
            }
        }
    }

    return (
        <Panel>
            <>
                <div className="mb-10 text-center font-bold">Register</div>
                <form onSubmit={handleRegister}>

                    <Input type="text" value={name} placeholder="Name" errors={errors?.name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>

                    <Input type="email" value={email} placeholder="Email" errors={errors?.email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>

                    <Input type="password" value={password} placeholder="Password" errors={errors?.password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>

                    <Input type="password" value={passwordConfirmation} placeholder="Password Confirmation" errors={errors?.password_confirmation} onChange={(e) => {
                        setPasswordConfirmation(e.target.value)
                    }}/>
                    <div className="mb-10">
                        <button
                            type="submit"
                            className="w-full
                            px-4
                            py-3
                            bg-indigo-500
                            hover:bg-indigo-700
                            rounded-md
                            text-white
                            "
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div>
                    <p className="text-base text-[#adadad] inline-block px-3"> Are you a member?</p>
                    <Link to="/login"
                          className="text-primary hover:underline"
                    >Login</Link>
                </div>
            </>
        </Panel>
    )
}

export default Login;