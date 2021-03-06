import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme';
import {Provider} from 'react-redux'
import {store} from './components/store'



// const root = ReactDOM.createRoot(document.getElementById('root'));
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



