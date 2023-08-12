// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

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
