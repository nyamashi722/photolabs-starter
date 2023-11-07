import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourite, toggleFav, showModal, similarPhotos, modal }) => {

  const photoArray = photos.map((photo) => {
    return (
      <PhotoListItem
        {...photo}
        photoObj={{ ...photo }}
        key={photo.id}
        photoId={photo.id}
        favourite={favourite}
        toggleFav={toggleFav}
        showModal={showModal}
      />
    )
  })

  const similarPhotosArray = !!modal ? similarPhotos.map((similarPhoto) => {
    return (
      <PhotoListItem
        {...similarPhoto}
        key={similarPhoto.id}
        photoId={similarPhoto.id}
        favourite={favourite}
        toggleFav={toggleFav}
      />
    )
  }) : null;

  return (
    <ul className="photo-list">
      {!modal && photoArray}
      {!!modal && similarPhotosArray}
    </ul>
  );
};

export default PhotoList;