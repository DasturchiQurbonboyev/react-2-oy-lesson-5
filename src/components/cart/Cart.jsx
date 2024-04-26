import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { incCart, decCart } from '../../context/cartSlice'

const Cart = () => {
    const carts = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    let items = carts?.map((el) =>
        <div key={el.id} className='px-[40px] py-[24px] shadow-md grid grid-cols-4   items-center    '>
            <div className='flex items-center gap-5'>
                <img src={el.thumbnail} className='w-[100px]' alt="" />
                <p>{el.title}</p>
            </div>
            <p>$ {el.price * el.quantity} </p>
            <div className='flex items-center gap-3 w-[80px] justify-between  border p-2 rounded-md '>
                <p>{el.quantity}</p>
                <div>
                    <FaChevronUp onClick={() => dispatch(incCart(el))} className='cursor-pointer' />
                    <FaChevronDown onClick={() => dispatch(decCart(el))} className='cursor-pointer' />
                </div>
            </div>
            <p className='text-end'>$ </p>
        </div>)
    return (
        <div className='pt-[120px]    '>
            <div className='kontainer grid gap-10'>
                <div className='px-[40px] py-[24px] shadow-md grid grid-cols-4   items-center    '>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p className='text-end'>Subtotal</p>
                </div>

                {
                    items
                }

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