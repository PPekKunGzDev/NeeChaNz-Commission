import Link from "next/link";
import { FaForward } from "react-icons/fa";

export default function Header() {
    return (
        <header className="text-white text-center">
        <nav className="fixed w-full h-16 bg-transparent z-50">

        <div className="mx-20 max-w-screen flex items-center justify-end px-3 gap-8 h-full">
            <Link className="th-font font-bold md:text-xl text-[14px] cursor-pointer underline-animate relative" href="/">
              หน้าหลัก
            </Link>
            <Link className="md:text-xl text-[14px] cursor-pointer underline-animate relative" href="/commission">
              Commission
            </Link>
            <Link className="md:text-xl text-[14px] cursor-pointer hover:scale-125 scale-100 transition-all duration-300 relative" href="https://docs.google.com/spreadsheets/d/1oqGqhItf8G0YxkJAzkv0v90aPzMKq9Ep7Ww24tOFf0E/edit?usp=drivesdk" target="_blank">
              <FaForward className="md:scale-150 scale-105"/>
            </Link>
          </div>
          
        </nav>
    </header>
    )
}