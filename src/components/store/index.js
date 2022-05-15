import favoritesReducer from '../reducers'
import renderMoviesReducer from '../reducers'
import {configureStore} from '@reduxjs/toolkit'
import ThemeRedux from '../reducers/ThemeRedux'
import TextBox from '../reducers/TextBox'


export const store = configureStore({
    reducer: {
      favorites: favoritesReducer,
      renderMovies:  renderMoviesReducer,
      theme: ThemeRedux,
      text: TextBox
    }
  })
  