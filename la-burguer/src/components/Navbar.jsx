import React, {useState, useEffect } from 'react'
import {Link} from 'react-scroll';
import Button from '../layouts/Button';
import {AiOutlineClose} from 'react-icons/ai';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Logo from "../assets/img/La-burguer.png";
const Navbar = () => {
     const [menu, setMenu,messages, setMessages] = useState(false);
       const handleChange = () => {
    setMenu(!menu);
    "Envío gratis sin costo",
        "Agrega papas a cada orden por $10"
  };

   useEffect(() => {
        const interval = setInterval(() => {
            setMessages(prevMessages => {
                const updatedMessages = [...prevMessages];
                const firstMessage = updatedMessages.shift();
                updatedMessages.push(firstMessage);
                return updatedMessages;
            });
        }, 3000); // Cambia este valor para ajustar la velocidad de cambio de mensajes

        return () => clearInterval(interval);
    }, []);

  

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className='fixed w-full z-40'>
        <div>
            <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-transparent text-black shadow-[0_10px_20px_rgba(0,0,0,_0.7)] backdrop-blur-sm' >
                <div className='flex flex-row items-center cursor-pointer'>
                   <Link to="home" spy={true} smooth={true} duration={500}>
                    <img className="absolute md:w-32 2xl:left-64 max-sm:w-24 sm:w-24 top-1 z-50 " src={Logo} alt="img" />
                   </Link>
                    </div>
                    <nav id='navegacion' className='hidden md:flex flex-row items-center text-lg font-medium gap-8 text-[#FFB800] '>
                        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'>Inicio</Link>
                        <Link to="hamburguer" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'>Hamburguesas</Link>
                        <Link to="wings" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'>Alitas</Link>
                        <Link to="snaks" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'>Snaks</Link>
                        <Link to="drinks" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'>Bebidas</Link>
                        <Link to="visit" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'>Visitanos</Link>
                      <Button title="Ordenar"/>
                    </nav>
                    <div className='md:hidden flex items-center text-yellow-50 z-30'>
                        {menu ? (
                            <AiOutlineClose size={25} onClick={handleChange}/>
                        ):(
                            <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                        )}
                    </div>
                    </div>
                    <div  className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
<Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'  onClick={closeMenu}>Inicio</Link>
                        <Link to="hamburguer" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'  onClick={closeMenu}>Hamburguesas</Link>
                        <Link to="wings" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'  onClick={closeMenu}>Alitas</Link>
                        <Link to="snaks" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'  onClick={closeMenu}>Snaks</Link>
                        <Link to="drinks" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer'  onClick={closeMenu}>Bebidas</Link>
                        <Link to="visit" spy={true} smooth={true} duration={500} className='hover:text-brightColor cursor-pointer' onClick={closeMenu}>Visitanos</Link>
                      <Button title="Ordenar"/>
                    </div>
        </div>
         <div className="bg-yellow-400 text-black uppercase p-1 items-center justify-center flex ">
        <marquee   direction="left">
            <span className="mr-96 ">Envío gratis sin costo</span>
            <span className='ml-96'>Agrega papas a cada orden de alimentos por $10</span>
        </marquee>
    </div>
    </div>
  )
}

export default Navbar;