import React, {ButtonHTMLAttributes} from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    type: "button" | "reset" | "submit";
    className?: string;
    children?: React.ReactChild
}
const Button: React.FC<ButtonProps> = ({type, className, children, ...rest}) => {
    const renderedClassNames = classNames(`
    w-full
                            px-4
                            py-2
                            bg-indigo-500
                            hover:bg-indigo-700
                            rounded-md
                            text-white
    `, className)
    return (
        <div className="mb-10">
            <button
                type={type}
                className={renderedClassNames}
                {...rest}
            >
                {children}
            </button>
        </div>
    )
}

export default Button;