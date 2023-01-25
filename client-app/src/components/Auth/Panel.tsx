import React from "react";
interface PanelProps {
    children?: JSX.Element
}
const Panel: React.FC<PanelProps> = ({children}) => {
    return (
        <section className="">
            <div className="container mx-auto mt-7">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="
                        relative
                        mx-auto
                        max-w-[525px]
                        overflow-hidden
                        rounded-lg
                        bg-white
                        py-16
                        px-10
                        text-center
                        sm:px-12
                        md:px-[60px]
                        ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Panel;