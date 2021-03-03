import React from 'react';
import './styles/index.scss';
import Header from './components/Header/';
import AppRouter from './routers/AppRouters';
import Footer from './components/Footer/';

const App = () => {

  return (
    <>
      <Header/>
      <AppRouter/>
      <Footer/>
    </>
  );
};

export default App;
