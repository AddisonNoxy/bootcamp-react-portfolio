import './index.css';
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';

function App() {
  

  return (
    <>
      <NavTabs />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App;
