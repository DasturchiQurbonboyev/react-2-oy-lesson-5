import React from 'react'
import img from "../../assets/images/hero/Frame694.png"

const Music = () => {
    return (
        <div className='kontainer bg-black items-center grid grid-cols-2'>
            <div className='flex flex-col justify-center gap-10 pt-10 pl-10 pb-10'>
                <p className='text-[#00FF66]    '>Categories</p>
                <h2 className=' text-[#FAFAFA] text-[48px] font-[600]   '  >Enhance Your Music Experience</h2>
                <div className='flex gap-[24px]'>
                    <div className='w-[62px] h-[62px] bg-white flex flex-col items-center rounded-[50%] justify-center    '>
                        <h5>25</h5>
                        <p>Hours</p>
                    </div>
                    <div className='w-[62px] h-[62px] bg-white flex flex-col items-center rounded-[50%] justify-center    '>
                        <h5>25</h5>
                        <p>Hours</p>
                    </div>
                    <div className='w-[62px] h-[62px] bg-white flex flex-col items-center rounded-[50%] justify-center    '>
                        <h5>25</h5>
                        <p>Hours</p>
                    </div>
                    <div className='w-[62px] h-[62px] bg-white flex flex-col items-center rounded-[50%] justify-center    '>
                        <h5>25</h5>
                        <p>Hours</p>
                    </div>
                </div>
                <div>
                    <button className='bg-[#00FF66] px-12 py-4 rounded-md    '>Buy Now!</button>
                </div>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Music