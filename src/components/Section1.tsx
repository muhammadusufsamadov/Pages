import React from 'react'
import ButtonGreen from './ButtonGreen'
import ButtonBorder from './ButtonBorder'
import imageMainFood from "../assets/porapoest-top 1.png"
interface IData {
    LoremSection1:string,
    textSection1:string,
    textButton1:string,
    textButtonBorder:string
} 

const Section1 = ({LoremSection1,textSection1, textButton1, textButtonBorder}:IData) => {
  return (
    <section className='lg:flex items-center justify-center gap-[50px]'>
        <div>
            <h1 className='lg:text-[45px] w-[300px] text-[23px] lg:text-start text-center lg:m-0 lg:mt-0 mt-[40px] m-auto  font-[660] mb-[40px] lg:w-[600px]'>{textSection1}</h1>
            <p>{LoremSection1}</p>
            <div className='flex gap-[20px]'>
                <ButtonGreen textButton1={textButton1}/>
                <ButtonBorder textButtonBorder={textButtonBorder} />
            </div>
        </div>
        <div>
            <img className='w-[400px]' src={imageMainFood} alt="" />
        </div>
    </section>
  )
}

export default Section1