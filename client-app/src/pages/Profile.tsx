import {MdOutlineCancel} from "react-icons/md";
import React, {useState} from "react";
import {useActions} from "../hooks/use-action";
import Button from "../components/Auth/Button";
import {useTypedSelector} from "../hooks/use-typed-selector";

const Profile: React.FC = () => {
    const {closeExtraPage, logout} = useActions();
    const {guest} = useTypedSelector((state) => {
        return state.auth;
    });

    let userType = 'user';
    if(guest){
        userType = 'guest';
    }

    return (
        <div className="bg-half-transparent w-screen h-screen fixed nav-item top-0 right-0">
            <div className="fixed bottom-5 right-5 rounded-2xl h-[calc(100vh-110px)] dark:text-gray-200 bg-white dark:[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-lg">Profile</p>
                    <button type="button" onClick={() => {closeExtraPage()}} style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%'}} className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray">
                        <MdOutlineCancel />
                    </button>
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4" onClick={() => {logout(userType)}}>
                    <Button type="button">Log out</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile;