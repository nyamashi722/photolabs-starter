import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData"


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, toggleFav, showModal, closeModal, fetchPhotosByTopicId} = useApplicationData();


  return (
    <div className="App">
      <HomeRoute topics={state.topics} photos={state.photos} favourites={state.favourites} toggleFav={toggleFav} showModal={showModal} fetchPhotosByTopicId={fetchPhotosByTopicId}/>
      {!!state.modal && <PhotoDetailsModal modal={state.modal} closeModal={closeModal} favourites={state.favourites} toggleFav={toggleFav} photos={state.photos}/>}
    </div>
  );
};

export default App;
