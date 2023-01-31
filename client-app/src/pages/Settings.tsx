import {MdOutlineCancel} from "react-icons/md";
import React, {useState} from "react";
import {useActions} from "../hooks/use-action";
import CloseExtraPage from "../components/CloseExtraPage";

const Settings: React.FC = () => {
    const {closeExtraPage} = useActions();

    return (
        <div className="bg-gray-600 bg-opacity-90 w-screen h-screen fixed nav-item top-0 right-0">
            <div className="fixed bottom-10 left-20 rounded-2xl h-2/4 dark:text-gray-200 bg-white dark:[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-lg">Settings</p>
                   <CloseExtraPage />
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p>Theme Options</p>
                    <div className="text-sm">
                        <div className="mt-4 inline-block ">
                            <input
                                type="radio"
                                id="light"
                                name="theme"
                                value="Light"
                                className="cursor-pointer"
                                onChange={() => {
                                }}
                                checked={true}
                            />
                            <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
                        </div>
                        <div className="mt-4 ml-4 inline-block">
                            <input
                                type="radio"
                                id="dark"
                                name="theme"
                                value="Dark"
                                className="cursor-pointer"
                                onChange={() => {
                                }}
                                checked={true}
                            />
                            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
                        </div>
                    </div>

                    <hr className="mt-2 mb-2"/>
                    <p>App Currency</p>
                    <div className="text-sm">
                        <div className="mt-4">
                            <input
                                type="radio"
                                id="ron"
                                name="ron"
                                value="RON"
                                className="cursor-pointer"
                                onChange={() => {
                                }}
                              //  checked={true}
                            />
                            <label htmlFor="ron" className="ml-2 text-md cursor-pointer">RON</label>
                        </div>
                        <div className="mt-4">
                            <input
                                type="radio"
                                id="euro"
                                name="euro"
                                value="EURO"
                                className="cursor-pointer"
                                onChange={() => {
                                }}
                               // checked={false}
                            />
                            <label htmlFor="euro" className="ml-2 text-md cursor-pointer">EURO</label>
                        </div>
                        <div className="mt-4">
                            <input
                                type="radio"
                                id="usd"
                                name="usd"
                                value="USD"
                                className="cursor-pointer"
                                onChange={() => {
                                }}
                              //  checked={true}
                            />
                            <label htmlFor="usd" className="ml-2 text-md cursor-pointer">US DOLLAR</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;