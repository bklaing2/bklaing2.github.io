import React from 'react'

import Header from '../components/header';
import Footer from '../components/footer';

export default ({ currentPage, children }) => (
  <div className='main-container container'>
    {/* Welcome to the website of Bryceson Laing! */}
    <Header currentPage={currentPage}/>
    
    {children}

    <Footer />
  </div>
)