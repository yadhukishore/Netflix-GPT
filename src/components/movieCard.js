
//MovieCard.js



import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

export const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4 h-auto'>
        <img className='rounded-lg'
        alt="Movie Card"
        src={IMG_CDN_URL+posterPath}
        />
    </div>
  )
}

