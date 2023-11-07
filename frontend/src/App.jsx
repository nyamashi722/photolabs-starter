import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import { useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [favourite, setFavourite] = useState([]);
  const toggleFav = (photoId) => {
    const photoIsInFav = favourite.includes(photoId)
    !!photoIsInFav ? setFavourite([...favourite.filter((id) => id !== photoId)]) : setFavourite([...favourite, photoId]);
  }

  const [modal, setModal] = useState(null);
  const showModal = (photoData) => setModal(photoData);
  const closeModal = () => setModal(null);

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} favourite={favourite} toggleFav={toggleFav} showModal={showModal}/>
      {!!modal && <PhotoDetailsModal modal={modal} closeModal={closeModal} favourite={favourite} toggleFav={toggleFav} photos={photos}/>}
    </div>
  );
};

export default App;
