import React from "react";
interface PanelProps {
    children?: JSX.Element
}
const Panel: React.FC<PanelProps> = ({children}) => {
    return (
        <div className="flex gap-10 flex-wrap justify-center">
            <div className="bg-white dark:text-gray-200 dark:  m-3 p-4 rounded-2xl md:w-780">
                    {children}
            </div>
        </div>
    )
}

export default Panel;