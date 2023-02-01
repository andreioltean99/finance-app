import React from "react";
import {useActions} from "../hooks/use-action";
import Button from "../components/Auth/Button";
import {useTypedSelector} from "../hooks/use-typed-selector";
import {useNavigate} from "react-router-dom";
import CloseExtraPage from "../components/CloseExtraPage";

const Profile: React.FC = () => {
    const {closeExtraPage, logout} = useActions();
    const navigate = useNavigate();
    const {user} = useTypedSelector((state) => {
        return state.auth;
    });

    const handleLogOut = () => {
        logout(user ? 'user' : 'guest');
        navigate('/');
    }



    const renderUserData = () => {
        if(user){
            return (
                <div className="ml-6 text-lg ">
                    <div>
                        <span className="font-semibold p-2">ID:</span>
                        <span>{user.id}</span>
                    </div>
                    <div>
                        <span className="font-semibold p-2">Name:</span>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <span className="font-semibold  p-2">Email:</span>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span className="font-semibold p-2">Created at:</span>
                        <span>{user.createdAt}</span>
                    </div>
                    <div>
                        <span className="font-semibold p-2">Email verified:</span>
                        <span>{user.emailVerifiedAt? 'true' : 'false'}</span>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="bg-gray-600 bg-opacity-50 w-screen h-screen fixed nav-item top-0 right-0">
            <div className="fixed bottom-5 right-5 rounded-2xl h-[calc(100vh-110px)] dark:text-gray-200 bg-white dark:[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-lg">Profile</p>
                   <CloseExtraPage />
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4" onClick={handleLogOut}>
                    <Button type="button">Log out</Button>
                </div>
                {renderUserData()}
            </div>
        </div>
    )
}

export default Profile;