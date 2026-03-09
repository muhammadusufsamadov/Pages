import React from 'react'

interface IText {
    textButtonBorder:string
}
const ButtonBorder = ({textButtonBorder}:IText) => {
  return (
        <div className='mt-[50px]'>
        <button className='border-[1px] px-[30px] py-[10px] border-[#4D8F76] rounded-[30px] flex items-center justify-center text-[#4D8F76]'>{textButtonBorder}</button>
    </div>
  )
}

export default ButtonBorder