import React from 'react'
import SectionFoods from './SectionFoods'

const Section3 = ({imageFood, LoremTextSection3,textSection3 }: any) => {
  return (
    <section className='w-[95%] m-auto px-[20px] py-[20px] bg-[white] rounded-[30px]'>
        <div className='flex justify-between px-[20px] items-center'>
            <h2 className='text-[34px] font-[550] '>Программа ПремиумБоул</h2>
            <p className='text-[#4D8F76]'>Каждый день новое меню</p>
        </div>
<p className='ml-[20px] mt-[30px]'>Калорийность</p>
        <div className='flex gap-[10px] justify-center mt-[30px]' style={{overflow:"auto", width:"100%"}}>
            <div className='px-[60px] py-[8px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>900 ккал</p>
<p>3 блюда</p>
            </div>
            <div className='px-[60px] py-[8px] text-center rounded-3xl border-[1px] bg-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>1 250 ккал </p>
<p>3 блюда</p>
            </div>
            <div className='px-[60px] py-[8px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>1 600 ккал</p>
<p>3 блюда</p>
            </div>
            <div className='px-[60px] py-[8px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>2 050 ккал</p>
<p>3 блюда</p>
            </div>
            <div className=' py-[8px] w-[200px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[20px] mb-[8px]'>индивидуально подобрать</p>
            </div>
        </div>

        <p className='ml-[20px] mt-[30px]'>Продолжительность</p>
 <div className='flex gap-[10px] justify-center mt-[30px]' style={{overflow:"auto", width:"100%"}}>
            <div className='px-[60px] py-[8px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>900 ккал</p>
<p>3 блюда</p>
            </div>
            <div className='px-[60px] py-[8px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>1 250 ккал </p>
<p>3 блюда</p>
            </div>
            <div className='px-[60px] py-[8px] text-center rounded-3xl border-[1px] bg-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>1 600 ккал</p>
<p>3 блюда</p>
            </div>
            <div className='px-[60px] py-[8px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>2 050 ккал</p>
<p>3 блюда</p>
            </div>
            <div className=' py-[8px] w-[200px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[20px] mb-[8px]'>индивидуально подобрать</p>
            </div>
        </div>
        <div>
            <p className='text-[23px] mt-[30px] ml-[20px]'>Пример дневного рациона</p>
            <p className='text-[gray] mt-[10px] ml-[20px]'>6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г</p>
        </div>
        <div className='flex gap-[12px] justify-center' style={{overflowX:"auto"}}>

         <div className='px-[20px] py-[5px] mt-[30px] w-[200px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>понедельник</p>
            </div>
         <div className='px-[20px] py-[5px] mt-[30px] w-[170px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>вторник</p>
            </div>
         <div className='px-[20px] py-[5px] mt-[30px] w-[170px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>четверг</p>
            </div>
         <div className='px-[20px] py-[5px] mt-[30px] w-[170px] text-center rounded-3xl border-[1px] bg-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>пятница</p>
            </div>
         <div className='px-[20px] py-[5px] mt-[30px] w-[170px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>суббота</p>
        </div>
         <div className='px-[20px] py-[5px] mt-[30px] w-[200px] text-center rounded-3xl border-[1px] border-[#DFCCB7]'>
<p className='text-[23px] mb-[8px]'>воскресенье</p>
        </div>
            </div>
            <SectionFoods imageFoods={imageFood} LoremSectionFoods={LoremTextSection3} textSectionFoods={textSection3} />
    </section>
  )
}

export default Section3