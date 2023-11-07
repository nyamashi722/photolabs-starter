import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({favourite}) => {
  const isFavPhotoExist = favourite.length >= 1

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;