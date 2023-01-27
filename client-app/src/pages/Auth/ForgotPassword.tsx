import Panel from "../../components/Auth/Panel";
import Input from "../../components/Auth/Input";
import Button from "../../components/Auth/Button";
import axios, {csrf} from "../../api/axios";
import React, {useState} from "react";
import AuthError from "../../components/Auth/AuthError";
import {isAxiosError} from "axios";
import {Link} from "react-router-dom";
import ResetPassword from "../../components/Auth/ResetPassword";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<AuthError>({});
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        await csrf();
        try {
            const response = await axios.post('/forgot-password', {
                email
            });
            setStatus(response.data.status);
        } catch (error) {
            if (isAxiosError(error)) {
                setErrors(error.response?.data.errors);
            }
        }
    }

    let content = (
        <>
            <div className="mb-10 text-center font-bold">Forgot Password</div>
            <form onSubmit={handleSubmit}>
                <Input type="email" value={email} placeholder="Email" errors={errors?.email} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>

                <Button type="submit">Submit</Button>
            </form>
            <div>
                <Link className="text-base text-[#adadad] inline-block px-3 cursor-pointer" to ='/'>Back to login</Link>
            </div>
        </>
    );

    if(status){
        content = (
            <>
                <div className="bg-green-700 m-2 p-2 rounded text-white">
                    {status}
                </div>
                <ResetPassword email={email} />
            </>
        )
    }

    return (
        <Panel>
            {content}
        </Panel>
    )
}

export default ForgotPassword;