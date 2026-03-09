import React from 'react'

interface IText {
    textButton1:string
}
const ButtonGreen = ({textButton1}:IText) => {
  return (
    <div className='mt-[50px]'>
        <button className='bg-[#4D8F76] px-[30px] py-[10px] rounded-[30px] flex items-center justify-center text-[white]'>{textButton1}</button>
    </div>
  )
}

export default ButtonGreen