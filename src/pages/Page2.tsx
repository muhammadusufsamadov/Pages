import React from 'react'
import Section1 from '../components/Section1'
import imageHands from "../assets/image copy 2.png"
import imageHands2 from "../assets/image copy 3.png"
import imageFood from "../assets/image copy 4.png"
import imageFood2 from "../assets/image copy 5.png"
import imageFood3 from "../assets/image copy 6.png"
import imageFood4 from "../assets/image copy 7.png"
import imageLoko from "../assets/image copy 8.png"
import imageLoko2 from "../assets/image copy 9.png"
import imageLoko3 from "../assets/image copy 10.png"
import imageLoko4 from "../assets/image copy 11.png"
import imageLoko5 from "../assets/image copy 12.png"
import imageLoko6 from "../assets/image copy 13.png"
import imageFood10 from "../assets/image copy 14.png"
import roudedWhite from "../assets/image copy 23.png"
import imageOtziv from "../assets/image copy 24.png"
import FoodWoman from "../assets/image copy 22.png"
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import SectionFoods from '../components/SectionFoods'
import ButtonGreen from '../components/ButtonGreen'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
const Page2 = () => {
  return (
    <div style={{backgroundColor:"rgb(255, 246, 233)"}}>
      <Section1 LoremSection1="" textSection1="Доставка прогрессивного питания для гурманов" textButton1="Подобрать питание" textButtonBorder="Получить консультацию" />
   
    <section className='mt-[60px]'>
      <Section2 textSection2="Подберите рацион для своих целей"/>
    </section>
    <section>
      <Section3/>
    <div className='flex gap-[20px] justify-center flex-wrap'>
      <SectionFoods imageFoods={imageFood} LoremSectionFoods="Утренний боул с перепелиным яйцом, киноа и лососем" textSectionFoods="Завтрак - 230/250 гр"/>
      <SectionFoods imageFoods={imageFood2} LoremSectionFoods="Утренний боул с перепелиным яйцом, киноа и лососем" textSectionFoods="Завтрак - 230/250 гр"/>
      <SectionFoods imageFoods={imageFood3} LoremSectionFoods="Утренний боул с перепелиным яйцом, киноа и лососем" textSectionFoods="Завтрак - 230/250 гр"/>
      <SectionFoods imageFoods={imageFood4} LoremSectionFoods="Утренний боул с перепелиным яйцом, киноа и лососем" textSectionFoods="Завтрак - 230/250 гр"/>
    </div>
    <div className='bg-[#A2BE95] py-[1px] lg:flex justify-center gap-[100px]'>
      <div>
      <ButtonGreen textButton1='Заказать 10 дней питания за 16 000 ₽'/>
      <p className='mt-[10px] ml-[30px] text-[white]'>1 250 ккал за 1 600 ₽ в день</p>
      </div>
      <div>
        <h3 className='mt-[10px] text-[25px] text-[white]'>Будем доставлять наборы каждый день.</h3>
    <p className='mt-[10px] text-[17px] lg:w-[700px] text-[white]'>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа.
Заявки принимаются не позднее, чем за день до предполагаемой доставки.</p>
      </div>
    </div>
    </section>
    <section>
              <h1 className='text-[40px] font-[550] mb-[30px] lg:ml-[110px] mt-[80px]'>О нашем сервисе</h1>

      <div className='lg:flex justify-center flex-wrap gap-[20px] text-center lg:text-start'>
        <Section4 imageLogoSmall={imageLoko} textTitleSection4="Мы используем деликатные технологии приготовления блюд" LoremSection4="Сухой гриль без прямого контакта продукта с жарочной поверхностью, запекание, су-вид"/>
        <Section4 imageLogoSmall={imageLoko2} textTitleSection4="Мы используем деликатные технологии приготовления блюд" LoremSection4="Сухой гриль без прямого контакта продукта с жарочной поверхностью, запекание, су-вид"/>
        <Section4 imageLogoSmall={imageLoko3} textTitleSection4="Мы используем деликатные технологии приготовления блюд" LoremSection4="Сухой гриль без прямого контакта продукта с жарочной поверхностью, запекание, су-вид"/>
        <Section4 imageLogoSmall={imageLoko4} textTitleSection4="Мы используем деликатные технологии приготовления блюд" LoremSection4="Сухой гриль без прямого контакта продукта с жарочной поверхностью, запекание, су-вид"/>
        <Section4 imageLogoSmall={imageLoko5} textTitleSection4="Мы используем деликатные технологии приготовления блюд" LoremSection4="Сухой гриль без прямого контакта продукта с жарочной поверхностью, запекание, су-вид"/>
        <Section4 imageLogoSmall={imageLoko6} textTitleSection4="Мы используем деликатные технологии приготовления блюд" LoremSection4="Сухой гриль без прямого контакта продукта с жарочной поверхностью, запекание, су-вид"/>
      </div>
      <div className='lg:flex justify-center mt-[50px]'>
            <div>
<h1 className='text-[23px] text-[#4D8F76] font-[550] mb-[10px]'>Попробуйте новый формат рационов — Боулы! <br />
Это богатый набор полезных веществ и масса вкусовых <br /> впечатлений!</h1>
<p style={{lineHeight:"33px"}}>Боулы — это сбалансированный вариант блюда, содержащего в себе все необходимые <br /> элементы за счёт большого количества компонентов. Ингредиенты блюда не <br /> смешиваются между собой, а не спеша поедаются по отдельности. <br />
Мы готовим полноценное здоровое питание на день и ежедневно доставляем утром к вашим дверям. <br />
Наш сервис помогает экономить время, поддерживать стройность, <br />
работоспособность и укреплять здоровье.</p>
            </div>
            <div>
              <img className='w-[320px] h-[300px]' src={FoodWoman} alt="" />
            </div>
        </div>
    </section>
    <section>
      <Section5/>
    </section>
    <section>
        <div>
            <h1 className='text-[50px] font-[550] lg:ml-[40px] mt-[40px]'>Акции</h1>
            <div className='lg:flex items-center justify-center gap-[80px] mt-[30px]'>

            <div className='flex bg-[#EA9DA3] items-center lg:w-[550px] py-[20px] rounded-4xl gap-[20px] px-[30px]'>
<div>
    <p className='text-[white] font-[550] text-[23px] mb-[20px]'>Наименование акции</p>
    <p className='text-[white] font-[550] text-[23px] mb-[27px]'>Краткое описание акции</p>
    <button className='border-[1px] border-[white] py-[10px] px-[20px] rounded-2xl text-[white]'>Подробнее</button>
</div>
<div>
    <img className='w-[220px]' src={roudedWhite} alt="" />
</div>
            </div>
            <div className='flex bg-[#9898A0] items-center lg:w-[550px] py-[20px] rounded-4xl gap-[20px] px-[30px]'>
<div>
    <p className='text-[white] font-[550] text-[23px] mb-[20px]'>Наименование акции</p>
    <p className='text-[white] font-[550] text-[23px] mb-[27px]'>Краткое описание акции</p>
    <button className='border-[1px] border-[white] py-[10px] px-[20px] rounded-2xl text-[white]'>Подробнее</button>
</div>
<div>
    <img className='w-[220px]' src={roudedWhite} alt="" />
</div>
            </div>
            </div>
        </div>
    </section>
    <section>
      <Section6/>
    </section>

    <section>
        <h1 className='text-[45px] ml-[30px] font-[550] mt-[40px] mb-[50px]'>Отзывы</h1>
        <div className='lg:flex gap-[30px] justify-center'>
            <img className='w-[260px] flex m-auto mt-[20px]' src={imageOtziv} alt="" />
            <img className='w-[260px] flex m-auto mt-[20px]' src={imageOtziv} alt="" />
            <img className='w-[260px] flex m-auto mt-[20px]' src={imageOtziv} alt="" />
            <img className='w-[260px] flex m-auto mt-[20px]' src={imageOtziv} alt="" />
        </div>
    </section>
    </div>
  )
}

export default Page2