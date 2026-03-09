import React from 'react'
import Section1 from '../components/Section1'
import imageHands from "../assets/image copy 2.png"
import imageHands2 from "../assets/image copy 3.png"
import imageFood from "../assets/image copy 4.png"
import imageFood2 from "../assets/image copy 5.png"
import imageFood3 from "../assets/image copy 6.png"
import imageFood4 from "../assets/image copy 7.png"
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import SectionFoods from '../components/SectionFoods'
import ButtonGreen from '../components/ButtonGreen'
const Home = () => {
  return (
    <div style={{backgroundColor:"rgb(255, 246, 233)"}}>
      <Section1 LoremSection1="" textSection1="Доставка прогрессивного питания для гурманов" textButton1="Подобрать питание" textButtonBorder="Получить консультацию" />
    <section>
      <div className='lg:flex items-center justify-center gap-[100px]'>
      <div>
        <img src={imageHands} alt="" />
      </div>
        <div>
          <h3 className='text-[33px] text-[550] mb-[30px]'>Еда, которая сделает тебя лучше!</h3>
          <p className='lg:w-[550px] text-[19px]'>Мы помогаем создавать новое качество жизни для наших клиентов, чтоб каждый человек был счастливым, здоровым и не отвлекался на рутинные процессы.
Для этого мы создали новый уникальный продукт на рынке доставки еды и приглашаем вас окунуться в гастрономический шик уже сегодня.</p>
        </div>
      </div>
      <div className='lg:flex flex-row-reverse mt-[30px] items-center justify-center gap-[100px]'>
      <div>
        <img src={imageHands2} alt="" />
      </div>
        <div>
          <h3 className='text-[33px] text-[550] mb-[30px]'>Изысканное меню высокой кухни</h3>
          <p className='lg:w-[550px] text-[19px]'>В наших блюдах мы продумали каждую деталь, все ингредиенты тщательно подобраны и создают неповторимый вкус.
Качественные продукты, деликатесы и суперфуды, которые помогают  поддерживать здоровье и обмен веществ. Мы используем крафтовые ингредиенты: с любовью выращиваем микрозелень, делаем соусы и масла, маринуем мясо, рыбу и морепродукты..</p>
        </div>
      </div>
    </section>
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
    </div>
  )
}

export default Home