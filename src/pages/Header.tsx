import React from 'react'
import imageLogo from "../assets/image.png"
const Header = () => {
  return (
    <section className='bg-[#A98C64] w-[100%] py-[20px] flex text-[white]'>
        <div className='flex w-[600px] lg:ml-[280px] gap-[20px] '>
            <img src={imageLogo} alt="" />
            <p className='text-[22px] font-[700]'>Скидка 20% на первый заказ</p>
        </div>
        <div>
            <p className='text-[22px] font-[700]'>Заказать </p>
        </div>
    </section>
  )
}

export default Header