import React from 'react'

const Layout = () => {
  return (
    <>
      <header className='w-[95%] rounded-3xl m-auto mt-[20px] bg-[lightblue]  py-[20px]'>
        <div className='flex justify-center gap-[100px] m-auto'>
          <p className='text-[22px] font-[550]'>Zustand</p>
          <p className='text-[22px] font-[550]'>Redux</p>
          <p className='text-[22px] font-[550]'>Jotai</p>
        </div>
      </header>
    </>
  )
}

export default Layout