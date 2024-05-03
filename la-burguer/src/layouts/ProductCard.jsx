import React from 'react';
import StarRating from './StartRating';
import Button from './Button';

const ProductCard = ({ imageUrl, name, price, details, rating }) => {
  return (
    <div className=" w-80 lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg backdrop-blur-sm hover:backdrop-blur-2xl cursor-pointer">
      <img className="w-full h-48 rounded-xl object-cover" src={imageUrl} alt={name} />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{name}</h3>
        <div className="flex flex-row justify-center">
          <StarRating rating={rating} />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{price}</h3>
          <Button title={details} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
