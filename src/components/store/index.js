import favoritesReducer from '../reducers'
import renderMoviesReducer from '../reducers'
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
      favorites: favoritesReducer,
      renderMovies:  renderMoviesReducer
    }
  })
  