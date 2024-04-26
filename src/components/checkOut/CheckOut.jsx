import React from 'react'

const CheckOut = () => {
    return (
        <div className='pt-[120px]'>
            <div className='kontainer'>
                <h2>Billing Details</h2>
                <div>
                    <div className='w-[470px] flex flex-col gap-8'>
                        <div>
                            <label className='text-[#666]    ' htmlFor="">First Name*</label> <br />
                            <input className='bg-[#F5F5F5] w-full h-[50px]   ' type="text" name="" id="" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' htmlFor="">Street Address*</label> <br />
                            <input className='bg-[#F5F5F5] w-full h-[50px]   ' type="text" name="" id="" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' htmlFor="">Apartment, floor, etc. (optional)</label><br />
                            <input className='bg-[#F5F5F5] w-full h-[50px]   ' type="text" name="" id="" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' htmlFor="">Phone Number*</label> <br />
                            <input className='bg-[#F5F5F5] w-full h-[50px]   ' type="text" name="" id="" />
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" />
                            <p>Save this information for faster check-out next time</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='px-[40px] py-[24px]  grid grid-cols-2   items-center    '>
                                <div>
                                    <img src="" alt="" />
                                    <p>LCD Monitor</p>
                                </div>
                                <p>$650</p>
                            </div>
                            <div className='px-[40px] py-[24px]  grid grid-cols-2   items-center    '>
                                <div>
                                    <img src="" alt="" />
                                    <p>LCD Monitor</p>
                                </div>
                                <p>$650</p>
                            </div>
                        </div>
                        <div className='px-[40px] py-[24px] shadow-md grid grid-cols-2 justify-between   items-center    '>
                            <div>
                                <img src="" alt="" />
                                <p>LCD Monitor</p>
                            </div>
                            <p>$650</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut