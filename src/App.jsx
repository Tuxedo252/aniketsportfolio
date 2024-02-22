import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Introduction from './components/Introduction';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full h-full' style={{ background: '#fbd846 no-repeat center/cover' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
