
import React from "react";
import {BsPersonCircle} from "react-icons/bs";
import {useActions} from "../hooks/use-action";
import {useTypedSelector} from "../hooks/use-typed-selector";


const Navbar = () => {
    const {openExtraPage} = useActions();
    const currentPage = useTypedSelector((state) => {
        return state.app.currentPage;
    })
    return (
        <div className="flex justify-between p-2 mx-4 relative">
                <div className="relative text-xl p-3">
                    <span>
                       {currentPage}
                    </span>
                </div>
            <div className="flex">
                <button className="relative text-xl rounded-full p-3 hover:bg-light-gray" onClick={() => {openExtraPage('profile')}}>
                    <span  className="">
                        <BsPersonCircle size={30} color="orange"/>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Navbar;