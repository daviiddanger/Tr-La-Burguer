import React, { useEffect } from 'react';
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  useEffect(() => {
    const smoothScroll = (targetId) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth', // Desplazamiento suave
        });
      }
    };

    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      smoothScroll(targetId);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
   <div className="  bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-6xl pb-4 max-sm:text-center">La Burguer</h1>
          <p className=" text-sm">
           Disfrute de una sinfonía de sabores, donde cada plato es un lienzo para
             excelencia culinaria.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 max-sm:text-center">Enlaces</h1>
          <nav className="grid xl:grid-cols-2 md:grid-cols-4 gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#home" 
            >
              Inicio
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#hamburguer"
            >
Hamburguesas            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#wings"
            >
              Alitas
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#snaks"
            >
              Snaks
            </a>
             <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#drinks"
            >
              Bebidas
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="#visit"
            >
Visitanos           </a>
        
            
          </nav>
        </div>
       
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 max-sm:text-center">Contactanos</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              trfood@trandroid.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +52 554710418
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer max-sm:text-center"
              href="/"
            >
             Redes Sociales
            </a>
            <div className="flex justify-around">

           <a className='hover:text-brightColor ' href="#"> <BsFacebook /></a>
            <a className='hover:text-brightColor ' href="#"> <RiTwitterXFill /></a>
            <a className='hover:text-brightColor ' href="#"><BsInstagram /></a>
            </div>
            
          </nav>
        </div>
      </div>
      <div>
        
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Tr-Android</span> |
            All rights reserved
          </p>
        
      </div>
    </div>
  );
};

export default Footer;
