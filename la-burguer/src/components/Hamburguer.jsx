import React from 'react';
import { Link } from 'react-scroll';
import ProductCard from '../layouts/ProductCard';
import productos from '../data/PreciosH.json'
import patron from "../assets/img/patron1.png";

const Hamburguer = () => {
  return (
     <div className="min-h-screen flex flex-col items-center lg:px-32 px-5 bg-[#1F1F1F] " style={{ backgroundImage: `url(${patron})`, backgroundRepeat: 'repeat'  }}>
   
    <div className='min-h-screen z-20 '>
 <h2 id='subtitulos' className="text-[#FFB800] mt-24 font-semibold text-6xl text-center max-sm:text-center drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">Deliciosas</h2>
 <div className="App  flex flex-wrap gap-8 justify-center text-white " >
      {productos.map((producto, index) => (
        <ProductCard
          key={index}
          imageUrl={producto.imageUrl}
          name={producto.name}
          price={producto.price}
          rating ={producto.rating}
          details={producto.details}
        />
      ))}
    </div>
    </div>
   
    </div>
    
  )
}

export default Hamburguer