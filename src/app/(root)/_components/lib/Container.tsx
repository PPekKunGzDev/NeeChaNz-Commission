import Link from 'next/link';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";


export default function Container() {
    return (
        <div className='flex flex-col justify-center items-center w-full my-24'>
            <div className='bg-black/50 md:px-40 px-32 py-5 rounded-lg'>
                <h1 className='th-font font-bold lg:text-[50px] md:text-[24px] text-[12px] text-[#FB9AD1]'>รายระเอียดเพิ่มเติม</h1>
                <div className=''>
                <p className='flex items-center gap-1'><GoDotFill color='white' />AAAAasdasdasd</p>
                <p className='flex items-center gap-1'><GoDotFill color='white' />asdasdasd</p>
                <p className='flex items-center gap-1'><GoDotFill color='white' />asdasdasd</p>
                <p className='flex items-center gap-1'><GoDotFill color='white' />asdasdasd</p>
                <p className='flex items-center gap-1'><GoDotFill color='white' />asdasdasd</p>
                </div>
            </div>

        </div>
    )
}