import { useReducer } from "react";
import { useEffect } from "react";


export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  ADD_PHOTO_TO_FAV: 'ADD_PHOTO',
  REMOVE_PHOTO_FROM_FAV: 'REMOVE_PHOTO',
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PHOTO_TO_FAV:
      return { ...state, favourite: [...state.favourite, action.value] }

    case ACTIONS.REMOVE_PHOTO_FROM_FAV:
      return { ...state, favourite: state.favourite.filter((id) => id !== action.value) }

    case ACTIONS.SELECT_PHOTO:
      return { ...state, modal: action.value }

    case ACTIONS.CLOSE_MODAL:
      return { ...state, modal: null }

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.value }

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.value }

    default:
      throw new Error(`${action.type} is not recognized`)
  }
}

const initialState = {
  photos: [],
  topics: [],
  favourite: [],
  modal: null
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleFav = (photoId) => {
    if (state.favourite.includes(photoId)) {
      return dispatch({ type: ACTIONS.REMOVE_PHOTO_FROM_FAV, value: photoId })
    }
    dispatch({ type: ACTIONS.ADD_PHOTO_TO_FAV, value: photoId })
  }

  const showModal = (photoData) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, value: photoData })
  }

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL })
  }

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => (res.json()))
      .then((photoArray) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: photoArray }))
  }, [])

  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((topicsArray) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, value: topicsArray }))
  }, [])

  return {
    state,
    toggleFav,
    showModal,
    closeModal
  }
}

export default useApplicationData;