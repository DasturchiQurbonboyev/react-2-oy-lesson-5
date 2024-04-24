import React from 'react'
import { FaRegEye, FaRegHeart } from 'react-icons/fa'


const Products = ({ data, str, month, all, hoverBtn }) => {
    let products = data.slice(0, all)?.map((el) => <div key={el.id} className='card w-[277px] border p-[14px]      '>
        <div className='relative z-10'>
            <div className='absolute right-4 top-2 flex flex-col gap-2'>
                <button className='bg-white flex justify-center items-center rounded-[50%] h-[30px] w-[30px]    '>
                    <FaRegHeart className=' size-6' />
                </button>
                <button className='bg-white flex justify-center items-center rounded-[50%] h-[30px] w-[30px]    '>
                    <FaRegEye className=' size-6' />
                </button>
            </div>
            <img className='w-full h-[220px] object-cover   ' src={el.thumbnail} alt="" />
            <div className={`text-center ${!hoverBtn ? "hidden" : ""} hover: z-0`}>
                <button className='bg-black text-white w-full py-2'>Add To Cart</button>
            </div>
        </div>
        <div>
            <h2 className='text-[16px]'>{el.title}</h2>
            <span className='text-[red]'>${el.price}</span>
            <span className='ml-3 line-through text-[#666]  '>${el.price + 1}</span>
        </div>
    </div>)


    return (
        <div className='kontainer mt-10'>
            <div className='flex items-center gap-2'>
                <div className='w-[20px] bg-red-500 h-10'>

                </div>
                <h1 className='text-red-500'>{month}</h1>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <h2 className='text-[36px] font-[600]     '>{str}</h2>
                <button className='bg-red-500 px-[48px] py-[16px] rounded-md  text-white  '>View All</button>
            </div>
            <div className="wrapper flex justify-between flex-wrap py-[50px] gap-[10px]   ">
                {products}
            </div>
        </div>
    )
}

export default Products