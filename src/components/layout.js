import React from 'react'

import Meta from '../components/meta'
import {Header, Footer} from './header-footer';


const Title = ({ children }) => <div class='container'><h1>{children}</h1></div>

export default ({ title, heading, currentPage, children }) => (
  <div class='main-container'>
    <Meta title={title} />

    <Header currentPage={currentPage}/>

    {heading ? <Title >{heading}</Title> : title ? <Title >{title}</Title> : null}
    {children}

    <Footer />
  </div>
)