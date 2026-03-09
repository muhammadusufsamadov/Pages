import React from 'react'
import ButtonGreen from '../components/ButtonGreen'
import imageNextText from "../assets/image copy 18.png"
import imageNextText2 from "../assets/image copy 19.png"
import imageRounded from "../assets/image copy 20.png"
import imageBrandBonk from "../assets/image copy 21.png"
const Footer = () => {
  return (
    <footer>
      <div className='lg:flex items-center justify-center gap-[200px] mt-[80px]'>
      <div>
        <h1 className='text-[34px] font-[550] mb-[20px]'>Пробный рацион</h1>
       <p className='text-[15px] text-[gray]'> Сомневаетесь? Протестируйте наш сервис и еду. <br />
Начните с пробного меню на два дня со скидкой 20% за 2 800 ₽ (1 200 ккал)</p>
<ButtonGreen textButton1='Попробовать'/>
      </div>
      <div className='flex items-center'>
        <img className='w-[250px]' src={imageNextText} alt="" />
        <img className='w-[150px] relative right-[70px]' src={imageNextText2} alt="" />
      </div>
      </div>
      <div className='lg:flex items-center justify-center gap-[100px] bg-[#B89683] w-[95%] rounded-3xl py-[20px] px-[20px] m-auto mt-[40px]' >
        <div>
          <p className='text-[34px] font-[550] mb-[15px] text-[white] ' >Будьте всегда в курсе!</p>
          <p>Подпишитесь на рассылку и будьте  всегда в курсе новинок, акций и новостей!</p>
        </div>
        <div className='lg:flex items-center gap-[60px]'>
         <input type="text" className='relative top-[20px] bg-[white] w-[250px] h-[40px] py-[15] px-[20px] rounded-4xl lg:mt-0 mt-[20px] ' placeholder='Укажите вашу почту' name="" id="" />
       <ButtonGreen textButton1='Подписаться'/>
        </div>
      </div>
      <div className='lg:flex items-center justify-center gap-[150px] mt-[50px]'>
        <div>
          <h2 className='text-[30px] font-[550]'>+7 988 500-1-700</h2>
          <span className='text-[gray]'>Ежедневно c 09:00 до 21:00</span>
          <p className='text-[gray] text-[13px] mt-[17px]'>ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица, дом 5, офис 4</p>
        </div>
        <div>
          <p>hello@pora-poest.com</p>
        </div>
        <div className='flex gap-[30px]'>
          <img className='w-[43px]' src={imageRounded} alt="" />
          <img className='w-[43px]' src={imageRounded} alt="" />
          <img className='w-[43px]' src={imageRounded} alt="" />
        </div>
      </div>
      <div className='lg:flex justify-between px-[30px] items-center'>

      <div>
        <p className='text-[gray] mt-[15px]'>© 2021 ПораПоесть — сервис доставки прогрессивного питания. </p>
        <p className='text-[13px] text-[gray] mt-[10px]'>Фотографии блюд на сайте являются вариантом сервировки блюда. Внешний вид блюда может отличаться от фотографии на сайте.  <br />
Указывая электронную почту и номер телефона на сайте, вы соглашаетесь с условиями Публичной оферты и Политикой конфедициальности</p>
      </div>
      <img className='w-[280px]' src={imageBrandBonk} alt="" />
      </div>
    </footer>
  )
}

export default Footer