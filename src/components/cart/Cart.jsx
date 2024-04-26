import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Cart = () => {
    return (
        <div className='pt-[120px]    '>
            <div className='kontainer grid gap-10'>
                <div className='px-[40px] py-[24px] shadow-md grid grid-cols-4   items-center    '>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p className='text-end'>Subtotal</p>
                </div>
                <div className='px-[40px] py-[24px] shadow-md grid grid-cols-4   items-center    '>
                    <div>
                        <img src="" alt="" />
                        <p>LCD Monitor</p>
                    </div>
                    <p>$650</p>
                    <div className='flex items-center gap-3 w-[80px] justify-between  border p-2 rounded-md '>
                        <p>01</p>
                        <div>
                            <FaChevronUp className='cursor-pointer' />
                            <FaChevronDown className='cursor-pointer' />
                        </div>
                    </div>
                    <p className='text-end'>$650</p>
                </div>
                <div className='px-[40px] py-[24px] shadow-md grid grid-cols-4   items-center    '>
                    <div>
                        <img src="" alt="" />
                        <p>LCD Monitor</p>
                    </div>
                    <p>$650</p>
                    <div className='flex items-center gap-3 w-[80px] justify-between  border p-2 rounded-md '>
                        <p>01</p>
                        <div>
                            <FaChevronUp className='cursor-pointer' />
                            <FaChevronDown className='cursor-pointer' />
                        </div>
                    </div>
                    <p className='text-end'>$650</p>
                </div>
                <div className='flex justify-between'>
                    <button className='px-12 py-4 border rounded-md       ' >Return To Shop</button>
                    <button className='px-12 py-4 border rounded-md       ' >Update Cart</button>
                </div>
                <div className='flex justify-between mt-20 '>
                    <div className='flex gap-4 items-start'>
                        <input className='border w-[300px] rounded-md px-[24px] py-4 outline-none ' placeholder="Coupon Code" type="text" name="" id="" />
                        <button className='px-12 py-4 border rounded-md  text-white bg-[#DB4444]      ' >Apply Coupon</button>
                    </div>
                    <div className='border border-[#000] rounded-md px-6 py-8 w-[470px]   '>
                        <h5>Cart Total</h5>
                        <div className='flex justify-between items-center py-4 border-b-2'>
                            <p>Subtotal:</p>
                            <p>$1750</p>
                        </div>
                        <div className='flex justify-between items-center py-4 border-b-2'>
                            <p>Subtotal:</p>
                            <p>$1750</p>
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <p>Subtotal:</p>
                            <p>$1750</p>
                        </div>
                        <div className='text-center'>
                            <button className='px-12 py-4 border rounded-md  text-white bg-[#DB4444]      ' >Procees to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Cart