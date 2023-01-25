import {MdOutlineCancel} from "react-icons/md";
import React, {useState} from "react";

interface SettingsProps {
    onClose: () => void
}
const Settings: React.FC<SettingsProps> = ({onClose}) => {


    return (
        <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
            <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-lg">Settings</p>
                    <button type="button" onClick={onClose} style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%'}} className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray">
                        <MdOutlineCancel />
                    </button>
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p>Theme Options</p>
                    <div className="mt-4">
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="Light"
                            className="cursor-pointer"
                            onChange={ () => {} }
                            checked={true}
                        />
                        <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
                    </div>
                    <div className="mt-4">
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="Dark"
                            className="cursor-pointer"
                            onChange={ () => {} }
                            checked={true}
                        />
                        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Settings;