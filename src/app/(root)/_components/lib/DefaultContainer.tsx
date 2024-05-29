import Link from 'next/link';
import cms_default from '../../../../../data/data_price.json';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";
import Modals from '../props/Modals';

interface dataInterface {
    name: string
    image: string[]
    desc1: string
    desc2: string
    desc3: string
    desc4: string
    desc5: string
    desc: {
        Doc: boolean
        Prof: boolean
    }
}

export default function DefaultContainer() {
    const dataW: dataInterface[] = cms_default;
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {dataW.map((data, index) => (
                <div key={index} className='p-2 w-full'>
                    <div className="rounded-lg bg-black/50">
                        <div className="p-8 flex flex-col items-center justify-center">
                            <h1 className='th-font font-bold text-[42px] md:text-[24px] lg:text-[26px] text-[#FB9AD1] mb-4'>{data.name}</h1>
                            {data?.desc.Doc && (
                                <span className="-translate-y-5 th-font font-bold">งานแนวภาพเปิดปาก, ปิดปาก</span>
                            )}
                            {data?.desc.Prof && (
                                <span className="-translate-y-5 th-font font-bold">งานแนวภาพโปรไฟล์หรือปกคลิป</span>
                            )}
                            <Image src={data.image[0]} width={300} height={100} alt='' className='rounded-sm' />
                            <div className="flex flex-col items-center gap-2 mt-5">
                                <p className='flex items-center text-xl gap-1'><GoDotFill size={10} color='white' />{data.desc1}</p>
                                <p className='flex items-center text-xl gap-1'><GoDotFill size={10} color='white' />{data.desc2}</p>
                                <p className='flex items-center text-xl gap-1'><GoDotFill size={10} color='white' />{data.desc3}</p>
                                <p className='flex items-center text-xl gap-1'><GoDotFill size={10} color='white' />{data.desc4}</p>
                                <p className='flex items-center text-xl gap-1'><GoDotFill size={10} color='white' />{data.desc5}</p>
                            </div>
                            <Modals image={data.image} index={index} />
                            <p className="th-font font-bold text-[12px] text-red-400 underline mt-2">*วิธีการกดออกคือกดช่องว่าง</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}