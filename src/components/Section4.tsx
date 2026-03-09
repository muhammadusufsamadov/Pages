import React from 'react'

const Section4 = ({imageLogoSmall,textTitleSection4, LoremSection4}:any) => {
  return (
    <section>
        <div className='flex'>
            <div className='w-[350px]'>
<img className='w-[60px] mb-[20px]' src={imageLogoSmall} alt="" />
<h3 className='text-[21px] font-[550] mb-[15px]'>{textTitleSection4}</h3>
<p className='text-[gray]'>{LoremSection4}</p>
            </div>
        </div>
        
    </section>
  )
}

export default Section4