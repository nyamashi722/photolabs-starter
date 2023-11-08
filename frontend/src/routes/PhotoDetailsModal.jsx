import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ modal, closeModal, favourites, toggleFav, photos }) => {
  const similarPhotos = Object.values(modal.similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal} />
      </button>
      <div className="photo-list__item">
        <PhotoFavButton photoId={modal.id} favourites={favourites} toggleFav={toggleFav} />
        <img src={modal.urls.regular} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-details">
          <img src={modal.user.profile} className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <p className="photo-list__username">{modal.user.username}</p>
            <p className="photo-details-modal__photographer-location">
              {modal.location.city}, {modal.location.country}
            </p>
          </div>
        </div>
      </div>
      <header className='photo-details-modal__header'>Similar Photos</header>
      <div className='photo-details-modal__images'>
        <PhotoList similarPhotos={similarPhotos} photos={photos} favourites={favourites} toggleFav={toggleFav} modal={modal} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;