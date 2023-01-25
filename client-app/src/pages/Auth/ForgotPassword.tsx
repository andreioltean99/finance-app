import Panel from "../../components/Auth/Panel";
import Input from "../../components/Auth/Input";
import Button from "../../components/Auth/Button";
import axios, {csrf} from "../../api/axios";
import React, {useState} from "react";
import AuthError from "../../components/Auth/AuthError";
import {isAxiosError} from "axios";

const ForgotPassword = () => {
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

    return (
        <Panel>
            <>
                {status && (
                    <div className="bg-green-700 m-2 p-2 rounded text-white">
                        {status}
                    </div>
                )}
                <div className="mb-10 text-center font-bold">Forgot Password</div>
                <form onSubmit={handleSubmit}>
                    <Input type="email" value={email} placeholder="Email" errors={errors?.email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>

                    <Button type="submit">Submit</Button>
                </form>
            </>
        </Panel>
    )
}

export default ForgotPassword;