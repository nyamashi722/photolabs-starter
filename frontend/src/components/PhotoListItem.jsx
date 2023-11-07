import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({location, urls, user, photoId, favourite, toggleFav, showModal, photoObj}) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={photoId} favourite={favourite} toggleFav={toggleFav} />
      <img src={urls.regular} className="photo-list__image" onClick={() => showModal(photoObj)}/>
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p className="photo-list__username">{user.username}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;