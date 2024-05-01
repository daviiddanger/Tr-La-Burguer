import React from 'react'
import Button from "../layouts/Button";
import { Link } from 'react-scroll';
import img from "../assets/img/Red Backround.svg";
import img2 from "../assets/img/Ellipse 2.svg";
import hamburguer from "../assets/img/unsplash_48F-Uvx9wvw.png";
import Offers from "../layouts/Offers"


const Home = () => {
  return (
     <div className="min-h-screen flex flex-row items-center lg:px-32 px-5 bg-[#1F1F1F] bg-cover bg-no-repeat">
        <div className="absolute top-96 right-[500px] 2xl:right-[750px] 2xl:top-[560px] h-full z-30" >
        <Offers title="$95 Mxn"/>

        </div>
         <img className="absolute top-28 right-20 h-[500px] 2xl:h-[700px] 2xl:top-36 2xl:right-40 z-20 max-sm:hidden" src={hamburguer} alt="img" />
          <img className="absolute top-0 right-0 h-full max-sm:hidden " src={img} alt="img" style={{filter: 'brightness(0.25) saturate(1) sepia(0) hue-rotate(180deg)'}} />
        <img className="absolute" style={{ bottom: "0px", right: "300px", height: "180px",filter: 'brightness(0.25) saturate(1) sepia(0) hue-rotate(180deg)' }} src={img2} alt="img2" />
      <div className="w-full lg:w-2/3 flex flex-col">
       
        <h1 id='negocio' className="text-[#FFB800] font-semibold text-6xl text-left max-sm:text-center drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">La Burguer</h1>
        <p className="font-semibold text-left text-white inline rounded-sm p-2 z-20 max-sm:text-center">Hamburguesas al carbón y más...</p>
         <div className='z-20 mt-24 max-sm:text-center ' >
          <Link to="dishes" spy={true} smooth={true} duration={500}>
          <Button  title="Ver más" />
          
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home