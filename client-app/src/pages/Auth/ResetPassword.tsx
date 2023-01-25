import Panel from "../../components/Auth/Panel";
import Input from "../../components/Auth/Input";
import {Link, useParams, useSearchParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import AuthError from "../../components/Auth/AuthError";
import axios, {csrf} from "../../api/axios";
import {isAxiosError} from "axios";

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState<AuthError>({});
    const [status, setStatus] = useState(null);
    const [searchParams] = useSearchParams();
    const {token} = useParams();

    useEffect(() => {
        let email = '';
        if(searchParams.get('email')){
            email = searchParams.get('email') as string;
        }
        setEmail(email);
    }, [])

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        await csrf();
        try {
            const response = await axios.post('/reset-password', {
                email, token, password, password_confirmation: passwordConfirmation
            });
            setStatus(response.data.status);
        } catch (error) {
            if (isAxiosError(error)) {
                setErrors(error.response?.data.errors);
            }
        }
    }

    return (
        <Panel>
            <>
                {status && (
                    <div className="bg-green-700 m-2 p-2 rounded text-white block">
                        {status}
                        <Link to="/login" className="block underline py-2">Go to Login</Link>
                    </div>
                )}
                <div className="mb-10 text-center font-bold">Reset Password</div>
                <form onSubmit={handleSubmit}>
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
                            Reset Password
                        </button>
                    </div>
                </form>
            </>
        </Panel>
    )
}

export default ResetPassword;