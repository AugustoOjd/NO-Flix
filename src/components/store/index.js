import favoritesReducer from '../reducers'
import renderMoviesReducer from '../reducers'
import {configureStore} from '@reduxjs/toolkit'
import ThemeRedux from '../reducers/ThemeRedux'

export const store = configureStore({
    reducer: {
      favorites: favoritesReducer,
      renderMovies:  renderMoviesReducer,
      theme: ThemeRedux,
    }
  })
  