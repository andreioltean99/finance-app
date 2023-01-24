
import React from "react";
import {BsPersonCircle} from "react-icons/bs";


const Navbar = () => {
    return (
        <div className="flex justify-between p-2 mx-4 relative">
                <div className="relative text-xl p-3">
                    <span>
                       Current Page
                    </span>
                </div>
            <div className="flex">
                <button className="relative text-xl rounded-full p-3 hover:bg-light-gray">
                    <span  className="">
                        <BsPersonCircle size={30} color="orange"/>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Navbar;