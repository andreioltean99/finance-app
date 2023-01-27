import Panel from "../../components/Auth/Panel";
import Input from "../../components/Auth/Input";
import {Link, useParams, useSearchParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import AuthError from "../../components/Auth/AuthError";
import axios, {csrf} from "../../api/axios";
import {isAxiosError} from "axios";
import Button from "./Button";

interface ResetPasswordProps{
    email: string
}

const ResetPassword: React.FC<ResetPasswordProps> = ({email}) => {
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState<AuthError>({});
    const [status, setStatus] = useState(null);
    const [token, setToken] = useState('');

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
                    <div className="bg-green-700 rounded text-white block">
                        {status}
                    </div>
                )}
                <div className="mb-10 text-center font-bold">Reset Password</div>
                <form onSubmit={handleSubmit}>
                    <Input type="email" value={email} disabled={true} className="bg-gray-200" placeholder="Email" errors={errors?.email}/>

                    <Input type="password" value={password} placeholder="Password" errors={errors?.password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>

                    <Input type="password" value={passwordConfirmation} placeholder="Password Confirmation" errors={errors?.password_confirmation} onChange={(e) => {
                        setPasswordConfirmation(e.target.value)
                    }}/>

                    <Input type="text" value={token} placeholder="Token" errors={errors?.token} onChange={(e) => {
                        setToken(e.target.value)
                    }}/>

                    <div className="mb-10">
                        <Button type="submit">Reset Password</Button>
                    </div>
                </form>
                <div>
                    <Link className="text-base text-[#adadad] inline-block px-3 cursor-pointer" to ='/'>Back to login</Link>
                </div>
            </>
        </Panel>
    )
}

export default ResetPassword;