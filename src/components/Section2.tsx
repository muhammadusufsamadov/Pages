import React from 'react'
import ButtonGreen from './ButtonGreen'

interface IText {
    textSection2:string
}
const Section2 = ({textSection2}:IText) => {
  return (
    <section className='py-[20px] bg-[#E2DDC0] rounded-[35px]'>
        <div>
            <p className='text-[40px] font-[550] ml-[30px] mb-[20px] mt-[5px]'>{textSection2}</p>

            <div className='lg:flex flex-wrap  gap-[30px] items-center justify-center'>
                <div className='flex items-center gap-[10px] bg-[white] w-[80px] py-[3px] rounded-4xl px-[10px]'>
                    <p className='rounded-[50%] bg-[#DFCCB7] px-[10px] py-[3px] '>Ж</p>
                    <p>M</p>
                </div>
                <button className='flex items-center gap-[10px] bg-[white]  py-[8px] rounded-4xl px-[26px]'>
                    <p>Ваш вес</p>
                </button>
                <button className='flex items-center gap-[10px] bg-[white]  py-[8px] rounded-4xl px-[26px]'>
                    <p>Ваш рост</p>
                </button>
                <button className='flex items-center gap-[10px] bg-[white]  py-[8px] rounded-4xl px-[26px]'>
                    <p>Ваш возраст</p>
                </button>
                <select className='flex items-center gap-[10px] bg-[white]  py-[8px] rounded-4xl px-[26px]'>
                    <option>Активность </option>
                </select>
                <select className='flex items-center gap-[10px] bg-[white]  py-[8px] rounded-4xl px-[26px]'>
                    <option>Выберите цель</option>
                </select>
                <div className='relative bottom-[26px]'>
                <ButtonGreen textButton1='Рассчитать рацион'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2