import React from "react";
import {MdOutlineCancel} from "react-icons/md";
import {useActions} from "../hooks/use-action";
import classnames from "classnames";

interface CloseExtraPageProps{
    className? : string
}
const CloseExtraPage: React.FC<CloseExtraPageProps> = ({className, ...rest}) => {
    const {closeExtraPage} = useActions();
    const renderedClassNames = classnames(
        "text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray",
        className
    )
    return (
        <button type="button" {...rest} onClick={() => {
            closeExtraPage()
        }} style={{color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
                className={renderedClassNames}>
            <MdOutlineCancel/>
        </button>
    )
}

export default CloseExtraPage;