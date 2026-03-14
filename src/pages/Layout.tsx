import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <header className='w-[95%] rounded-3xl m-auto mt-[20px] bg-[lightblue]  py-[20px]'>
        <div className='flex justify-center gap-[100px] m-auto'>
          <Link to={"/Home"}>
          <p className='text-[22px] font-[550]'>Zustand</p>
          </Link>
          <Link to={"/Redux"}>
          <p className='text-[22px] font-[550]'>Redux</p>
          </Link>
          <Link to={"/Jotai"}>
          <p className='text-[22px] font-[550]'>Jotai</p>
          </Link>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout