import React from 'react'

const SectionFoods = ({imageFoods, LoremSectionFoods, textSectionFoods}:any) => {
  return (
    <div className='w-[280px]'>
        <div className='lg:flex gap-[30px] justify-center items-center '>
                <div>
<img className='w-[180px] flex m-auto' src={imageFoods} alt="" />
<p className=' pl-[20px] text-[gray] mb-[16px]'>{textSectionFoods}</p>
<p className=' pl-[20px] text-[18px] w-[100%] lg:text-start'>{LoremSectionFoods}</p>
                </div>
            </div>
    </div>
  )
}

export default SectionFoods