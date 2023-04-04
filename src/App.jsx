import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './components/Pages/Header'
import Footer from './components/Pages/Footer'

function App() {


  return (
    <div>
      {/* fixed Header */}
      <Header></Header>

      {/* all other child component */}
      <Outlet></Outlet>

      {/* fixed footer */}
      <Footer></Footer>
    </div>
  );
}

export default App
