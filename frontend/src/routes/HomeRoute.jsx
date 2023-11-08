import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, favourites, toggleFav, showModal, fetchPhotosByTopicId}) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} fetchPhotosByTopicId={fetchPhotosByTopicId} />
      <PhotoList photos={photos} favourites={favourites} toggleFav={toggleFav} showModal={showModal}/> 
    </div>
  );
};

export default HomeRoute;
