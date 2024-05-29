import React, { FC } from 'react';
import ButtonS from "../Button";

interface ButtonProps {
    image: string[],
    index?: number
}

const Modals: FC<ButtonProps> = (props) => {
    const { index, image } = props;
    return (
        <>
            <label htmlFor={"my_modal_" + index}>
                <ButtonS text='เพิ่มเติม' />
                {/* <h1>{image}</h1> */}
            </label>
            <input type="checkbox" id={"my_modal_" + index} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box_pp modal-box flex flex-wrap flex-col items-center w-fit h-fit">
                    <div className="modal-action m-0">
                        <label htmlFor={"my_modal_" + index} className="hover:cursor-pointer text-lg font-bold tracking-[1px]"></label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {image.map((data: any, index: number) => (
                            <div key={index} className='flex items-center w-80 h-80 bg-white border-2 border-white'>
                                <img src={image[index]}
                                    alt="Can't Get Data Image"
                                    className=" w-full h-auto" />
                            </div>
                        ))}
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor={"my_modal_" + index} />
            </div>
        </>
    )
}

export default Modals;