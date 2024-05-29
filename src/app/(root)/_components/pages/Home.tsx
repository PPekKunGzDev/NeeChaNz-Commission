"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="flex flex-col justify-center items-center w-screen h-screen">
                    <h1 className="th-font font-bold md:text-[50px] text-xl drop-shadow-2xl text-white">รอก่อนได้มั้ยกำลังโหลด...</h1>
                    <Image src="https://i.gifer.com/ZWdx.gif" width={100} height={100} alt="" className=""/>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center w-screen h-screen">
                    <div className="md:text-[60pt] text-[40px] text-white [text-shadow:2px_4px_6px_var(--tw-shadow-color)] shadow-pink-400" data-aos="zoom-in" data-aos-duration="1000">
                        Commission
                    </div>
                    <div className="md:text-[20pt] text-[16px] text-white [text-shadow:2px_4px_6px_var(--tw-shadow-color)] shadow-pink-400" data-aos="zoom-in" data-aos-duration="2500">
                        By NeeChaNz
                    </div>
                </div>
            )
            }
        </>
    )
}