import React from 'react'
import { Link, Outlet } from 'react-router'
import "../App.css"
const Layout = () => {
  return (
    <>
    <div className='main'>
        <header className='flex gap-[100px] justify-center items-center'>
           <Link to={"/Zustand"}>
            <p>Zustand</p>
           </Link>
           <Link to={"/Redux"}>
            <p>Redux</p>                                                                        
           </Link>
           <Link to={"/Jotai"}>
            <p>Jotai</p>
           </Link>
        </header>
    </div>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout