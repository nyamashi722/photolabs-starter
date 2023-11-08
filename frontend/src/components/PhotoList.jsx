import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFav, showModal, similarPhotos, modal}) => {

  const photoArray = photos.map((photo) => {
    return (
      <PhotoListItem
        {...photo}
        photoObj={{ ...photo }}
        key={photo.id}
        photoId={photo.id}
        favourites={favourites}
        toggleFav={toggleFav}
        showModal={showModal}
      />
    )
  })

  const similarPhotosArray = !!modal && similarPhotos.map((similarPhoto) => {
    return (
      <PhotoListItem
        {...similarPhoto}
        key={similarPhoto.id}
        photoId={similarPhoto.id}
        favourites={favourites}
        toggleFav={toggleFav}
      />
    )
  });

  return (
    <ul className="photo-list">
      {!modal && photoArray}
      {!!modal && similarPhotosArray}
    </ul>
  );
};

export default PhotoList;