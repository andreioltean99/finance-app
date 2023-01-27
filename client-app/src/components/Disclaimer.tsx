import React from "react";
interface DisclaimerProps{
    children: JSX.Element | string
}

const Disclaimer: React.FC<DisclaimerProps> = ({children}) => {
    return (
        <section className="">
            <div className="container mx-auto mt-7">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto overflow-hidden rounded-lg bg-orange-200 py-5 px-10 text-center sm:px-12 md:px-[60px]">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Disclaimer;