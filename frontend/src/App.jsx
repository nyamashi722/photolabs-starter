import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData"


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, toggleFav, showModal, closeModal} = useApplicationData();


  return (
    <div className="App">
      <HomeRoute topics={state.topics} photos={state.photos} favourite={state.favourite} toggleFav={toggleFav} showModal={showModal}/>
      {!!state.modal && <PhotoDetailsModal modal={state.modal} closeModal={closeModal} favourite={state.favourite} toggleFav={toggleFav} photos={state.photos}/>}
    </div>
  );
};

export default App;
