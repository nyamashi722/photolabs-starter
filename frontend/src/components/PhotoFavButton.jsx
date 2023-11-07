import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photoId, favourite, toggleFav}) {
  const selected = favourite.includes(photoId)

  return (
    <div onClick={() => {toggleFav(photoId)}} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;