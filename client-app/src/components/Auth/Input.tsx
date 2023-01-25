import React, {InputHTMLAttributes} from "react";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string,
    value: string | number,
    placeholder: string,
    className?: string
    errors?: [],
}


const Input: React.FC<InputProps> = ({
                                         type,
                                         value,
                                         placeholder,
                                         errors,
                                         ...otherProps
                                     }) => {
    const {className} = {...otherProps};
    const renderedClassNames = classNames(`
     border-[#E9EDF4]
                                w-full
                                rounded-md
                                border
                                bg-[#FCFDFE]
                                py-3
                                px-5
                                text-base text-body-color
                                placeholder-[#ACB6BE]
                                outline-none
                                focus:border-primary
                                focus-visible:shadow-none
    `, className);

    return (
        <div className="mb-4">
            <input
                type={type}
                value={value}
                {...otherProps}
                placeholder={placeholder}
                className={renderedClassNames}
            />
            {errors?.length && (
                <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">{errors}</span>
                </div>
            )}
        </div>
    )
}

export default Input;