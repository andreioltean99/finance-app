import {MdOutlineCancel} from "react-icons/md";
import React from "react";
import {useActions} from "../hooks/use-action";
import Button from "../components/Auth/Button";
import {useTypedSelector} from "../hooks/use-typed-selector";
import {useNavigate} from "react-router-dom";
import CloseExtraPage from "../components/CloseExtraPage";

const Profile: React.FC = () => {
    const {closeExtraPage, logout} = useActions();
    const navigate = useNavigate();
    const {guest} = useTypedSelector((state) => {
        return state.auth;
    });

    const handleLogOut = () => {
        logout(guest ? 'guest' : 'user');
        navigate('/');
    }

    return (
        <div className="bg-gray-600 bg-opacity-90 w-screen h-screen fixed nav-item top-0 right-0">
            <div className="fixed bottom-5 right-5 rounded-2xl h-[calc(100vh-110px)] dark:text-gray-200 bg-white dark:[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-lg">Profile</p>
                   <CloseExtraPage />
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4" onClick={handleLogOut}>
                    <Button type="button">Log out</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile;