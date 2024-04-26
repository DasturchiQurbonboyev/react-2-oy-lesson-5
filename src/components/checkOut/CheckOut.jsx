import React from 'react'
import frame from "../../assets/images/checkout/Frame.png"

const CheckOut = () => {
    return (
        <div className='pt-[120px]'>
            <div className='kontainer'>
                <h2 className='text-[36px] font-[500] leading-[30px] mb-12    '>Billing Details</h2>
                <div className='flex gap-10 justify-between'>
                    <div className='w-[470px] flex flex-col gap-8'>
                        <div>
                            <label className='text-[#666]    ' htmlFor="">First Name*</label> <br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" name="" id="" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' htmlFor="">Street Address*</label> <br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" name="" id="" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' htmlFor="">Apartment, floor, etc. (optional)</label><br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" name="" id="" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' htmlFor="">Phone Number*</label> <br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" name="" id="" />
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" name="" id="" />
                            <p>Save this information for faster check-out next time</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className=' py-[24px]  flex justify-between   items-center    '>
                                <div>
                                    <img src="" alt="" />
                                    <p>LCD Monitor</p>
                                </div>
                                <p>$650</p>
                            </div>
                            <div className=' py-[24px]  flex justify-between   items-center    '>
                                <div>
                                    <img src="" alt="" />
                                    <p>LCD Monitor</p>
                                </div>
                                <p>$650</p>
                            </div>
                        </div>
                        <div className=' py-[24px] border-b-2 flex justify-between   items-center    '>
                            <p>Subtotal:</p>
                            <p>$650</p>
                        </div>
                        <div className=' py-[24px] border-b-2 mb-8 flex justify-between   items-center    '>
                            <p>Subtotal:</p>
                            <p>$650</p>
                        </div>
                        <div className='flex gap-4 justify-between mb-8'>
                            <div className='flex gap-4'>
                                <input type="radio" name="" id="" />
                                <p>Bank</p>
                            </div>
                            <img src={frame} alt="" />
                        </div>
                        <div className='flex gap-4 mb-8'>
                            <input type="radio" name="" id="" />
                            <p>Cash on delivery</p>
                        </div>
                        <div className='flex gap-4 items-start mb-8'>
                            <input className='border w-[300px] rounded-md px-[24px] py-4 outline-none ' placeholder="Coupon Code" type="text" name="" id="" />
                            <button className='px-12 py-4 border rounded-md  text-white bg-[#DB4444]      ' >Apply Coupon</button>
                        </div>
                        <button className='px-12 py-4 border rounded-md  text-white bg-[#DB4444]      ' >Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut