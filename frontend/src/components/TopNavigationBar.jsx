import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = ({topics, favourites, fetchPhotosByTopicId}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopicId={fetchPhotosByTopicId}/>
      <FavBadge favourites={favourites}/>
    </div>
  )
}

export default TopNavigation;