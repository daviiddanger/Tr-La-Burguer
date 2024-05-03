import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const StarRating = ({ rating }) => {
  const MAX_STARS = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const starArray = [];

  for (let i = 0; i < fullStars; i++) {
    starArray.push(<BsStarFill key={i} className="text-yellow-400" />);
  }

  if (hasHalfStar) {
    starArray.push(<BsStarHalf key={starArray.length} className="text-yellow-400" />);
  }

  const remainingStars = MAX_STARS - starArray.length;

  for (let i = 0; i < remainingStars; i++) {
    starArray.push(<BsStar key={starArray.length + i} className="text-yellow-400" />);
  }

  return <div className="flex flex-row">{starArray}</div>;
};

export default StarRating;
