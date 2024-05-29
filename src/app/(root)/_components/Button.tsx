
import Link from "next/link";
import React, { FunctionComponent, ReactNode } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

interface LinkButtonProps {
    text: string
    className?: string
    children?: ReactNode
}

const Button: FunctionComponent<LinkButtonProps> = ({ text, className = "", children }) => {
    return (
            <div className="mt-5 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                <div className="flex justify-between mx-3 items-center">
                    <div className="flex gap-2">
                        <div className={className}>{children}</div>
                        <p className="th-font font-bold">{text}</p>
                        <div className="text-gray-400">
                            <MdVerified color="white" size={22} />
                        </div>
                    </div>
                </div>
            </div>
    )
};
export default Button;