import React from 'react'
import hero from "../../../../assets/images/hero/hero.png"

const Hero = () => {
    return (
        <>
            <div className='pb-6 kontainer flex justify-between  items-center gap-4 border-b-2    '>
                <div className='w-[217px] border-r-2 mb-[40px] pt-[40px]   '>
                    <ul className='flex flex-col gap-[12px]'>
                        <li>Woman's Fashion</li>
                        <li>Men's Fashion</li>
                        <li>Electronics</li>
                        <li>Home & Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Baby's & Toys</li>
                        <li>Groceries & Pets</li>
                        <li>Health & Beauty</li>
                    </ul>
                </div>
                <div className='mb-[40px] pt-[40px]   '>
                    <img src={hero} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero