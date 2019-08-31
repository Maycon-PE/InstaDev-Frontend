import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './GlobalStyle'

import Routes from './routes'
import Header from './components/Header/'

const App = () => 
  <BrowserRouter>
  	<GlobalStyle />
    <Header />
    <Routes />
  </BrowserRouter>


export default App;
