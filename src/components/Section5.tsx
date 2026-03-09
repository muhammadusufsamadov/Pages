import React from 'react'
import imageMap from "../assets/image copy 15.png"
import ButtonBorder from './ButtonBorder'
import ButtonGreen from './ButtonGreen'
const Section5 = () => {
  return (
    <section className='bg-[#F4EDDE] py-[20px] px-[30px] rounded-3xl  w-[95%] m-auto'>
        <div>
            <h1 className='text-[45px] font-[550] mb-[15px]'>Карта доставки</h1>
            <p className='mb-[20px]'>Доставка осуществляется каждый день с 06:00 до 12:00. <br /> Выбор интервала — 2 часа.</p>
        </div>
        <div className='lg:flex gap-[80px]'>
       <div>
        <img className='w-[730px] h-[400px]' src={imageMap} alt="" />
       </div>
       <div>
        <ButtonBorder textButtonBorder='По городу бесплатно'/>
        <ButtonBorder textButtonBorder='По городу бесплатно'/>
        <ButtonBorder textButtonBorder='По городу бесплатно'/>
       <div>
        <div className='relative top-[20px]'>
<p>Уточните стоимость и время доставки</p>
<p className='text-[25px] font-[550]'>+7 988 500-1-700</p>
        </div>
<ButtonGreen textButton1='Перезвоните мне' />
       </div>
       </div>
        </div>
    </section>
  )
}

export default Section5