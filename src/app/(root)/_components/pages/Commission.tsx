"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import DefaultContainer from "../lib/DefaultContainer";
import Container from "../lib/Container";
import Footer from "../layouts/Footer";

export default function Commission() {
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
                    <Image src="https://i.gifer.com/ZWdx.gif" width={100} height={100} alt="" className="" />
                </div>
            ) : (
                <div className="w-screen h-screen grid grid-cols-3 border" style={{gridTemplateColumns:"10fr 50fr 10fr"}}>
                    <div className="bg-[linear-gradient(180deg,_rgba(197,179,235,1)_0%,_rgba(231,191,227,1)_54%,_rgba(255,200,219,1)_100%)]"></div>
                    <div className="bg-[linear-gradient(180deg,_rgba(197,179,235,1)_0%,_rgba(231,191,227,1)_54%,_rgba(255,200,219,1)_100%)]">
                        <div className="">
                            <Container />
                            <DefaultContainer />
                            <Footer/>
                        </div>
                    </div>
                    <div className="bg-[linear-gradient(180deg,_rgba(197,179,235,1)_0%,_rgba(231,191,227,1)_54%,_rgba(255,200,219,1)_100%)]"></div>
                </div>
            )
            }
        </>
    )
}