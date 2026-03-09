import React from 'react'
import Header from './Header'
import imageLogo2 from "../assets/image copy.png"
import { Link, Outlet } from 'react-router'
import Footer from './Footer'
import "../App.css"
const Layout = () => {
  return (
    <div style={{backgroundColor:"rgb(255, 246, 233)"}}>
        <Header/>
        <Link to={"/Page2"}>
          <p className='Page2'>Pa<span style={{backgroundColor:"rgb(195, 0, 255)",paddingTop:"2px",paddingBottom:"2px",borderRadius:"10px", paddingRight:"10px",paddingLeft:"8px", color:"white"}}>ge 2</span></p> 
        </Link>
        
        <section className='lg:flex hidden items-center justify-between px-[30px]'>
          <div>
          <img src={imageLogo2} alt="" />
          </div>
          <div className='flex text-[18px] font-[550] gap-[20px]'>
            <p>Подбор рациона</p>
            <p>Программы питания</p>
            <p>О нас</p>
            <p>Доставка</p>
            <p>Акции</p>
            <p>FAQ</p>
            <p>Отзывы</p>
          </div>
          <div>
            <p className='text-[#4D8F76] mb-[14px] mt-[10px]'>Перезвоните мне</p>
            <p className='text-[25px] font-[660]'>+7 988 500-1-700</p>
            <p className='mt-[9px] ml-[20px]'>c 09:00 to 21:00</p>
          </div>
        </section>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout