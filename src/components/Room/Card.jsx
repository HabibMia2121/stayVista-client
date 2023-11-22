/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ roomData }) => {
    
    return (
        <Link to={`room/${roomData?._id}`} className='col-span-1 cursor-pointer group mt-4'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
                        aspect-square 
                        w-full 
                        relative 
                        overflow-hidden 
                        rounded-xl
                    '
                >
                    <img
                        className='
                        object-cover 
                        h-full 
                        w-full 
                        group-hover:scale-110 
                        transition
                        '
                        src={roomData?.image}
                        alt='Room'
                    />
                    <div
                        className='
                        absolute
                        top-3
                        right-3
          '
                    >
                        {/* <HeartButton /> */}
                    </div>
                </div>
                <div className='font-semibold text-lg'>{roomData?.location }</div>
                <div className='font-light text-neutral-500'>
                    5 nights
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <div className='font-semibold'>$ {roomData?.price}</div>
                    <div className='font-light'>night</div>
                </div>
            </div>
        </Link>
    );
};

export default Card;