import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, favourite, toggleFav, showModal}) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourite={favourite}/>
      <PhotoList photos={photos} favourite={favourite} toggleFav={toggleFav} showModal={showModal}/> 
    </div>
  );
};

export default HomeRoute;
