import React from 'react'
import imageArrow from "../assets/image copy 16.png"
import ButtonGreen from './ButtonGreen'
import imageWoman from "../assets/image copy 17.png"
const Section6 = () => {
  return (
    <section>
        <div>
            <h1 className='text-[48px] mb-[17px] ml-[40px] mt-[60px] font-[550]'>Частые вопросы</h1>
            <div className='flex gap-[20px] flex-wrap ml-[60px]'>
                <button className='border-[1px] border-[#DFCCB7] rounded-[30px] py-[5px] px-[20px]'>Продукты</button>
                <button className='border-[1px] border-[#DFCCB7] rounded-[30px] py-[5px] px-[20px]'>Программы</button>
                <button className='border-[1px] bg-[#DFCCB7] rounded-[30px] py-[5px] px-[20px]'>Оплата и доставка</button>
                <button className='border-[1px] border-[#DFCCB7] rounded-[30px] py-[5px] px-[20px]'>Хранение</button>
            </div>
        </div>
        <div className='w-[90%] m-auto bg-[white] rounded-3xl '>
            <div className='flex text-[30px] font-[550] items-center px-[30px] py-[10px] mt-[30px] justify-between'>
<p>Как я могу оплатить заказ?</p>
<img className='w-[30px]' src={imageArrow} alt="" />
            </div>
        </div>
        <div className='w-[90%] m-auto bg-[white] rounded-3xl '>
            <div className='flex text-[30px] font-[550] items-center px-[30px] py-[10px] mt-[30px] justify-between'>
            <div>
<p>Могу ли я изменить адрес и время доставки?</p>
<p className='text-[16px] text-[gray] mt-[10px]'>Каждый вечер, в день доставки, с вами связывается курьер, ориентировочно с 19:00 до 20:00 для уточнения адреса <br /> и времени доставки. При необходимости, вы можете их изменить, сообщив об этом курьеру при звонке.</p>
            </div>
<img className='w-[30px]' src={imageArrow} alt="" />
            </div>
        </div>
        <div className='w-[90%] m-auto bg-[white] rounded-3xl '>
            <div className='flex text-[30px] font-[550] items-center px-[30px] py-[10px] mt-[30px] justify-between'>
<p>Могу ли я перенести день доставки?</p>
<img className='w-[30px]' src={imageArrow} alt="" />
            </div>
        </div>
        <div className='w-[90%] m-auto bg-[white] rounded-3xl '>
            <div className='flex text-[30px] font-[550] items-center px-[30px] py-[10px] mt-[30px] justify-between'>
<p>Могу ли я приостановить доставку, на какой срок?</p>
<img className='w-[30px]' src={imageArrow} alt="" />
            </div>
        </div>
        <section className='bg-[#A2BE95] h-[370px] lg:flex w-[95%] rounded-3xl m-auto mt-[40px] px-[20px] justify-center py-[20px] items-center gap-[170px]' >
            <div>
                <h1 className='text-[45px] font-[550] mb-[20px] text-[white]'>Бесплатная консультация  <br />диетолога</h1>
                <input type="text" className='bg-[white] w-[250px] h-[40px] py-[15] px-[20px] rounded-4xl' placeholder='Ваше имя' name="" id="" />
                <input type="text" className='bg-[white] w-[250px] h-[40px] py-[15] px-[20px] rounded-4xl lg:mt-0 mt-[20px] lg:ml-[20px]' placeholder='Телефон' name="" id="" />
         <ButtonGreen textButton1='Отправить заявку'/>
            </div>
            <div>
                <img className='w-[300px] lg:block hidden  h-[400px] relative bottom-[15px] ' src={imageWoman} alt="" />
            </div>
        </section>
    </section>
  )
}

export default Section6