import React from 'react'

import Meta from '../components/meta'
import {Header, Footer} from './header-footer';

import styles from './layout.module.css'


export default ({ title, heading, currentPage, children }) => (
  <div>
    <Meta title={title} />

    <div class={styles.screen}>
      <div class={styles.container}>
        <Header currentPage={currentPage}/>
        {children}
        <Footer />
      </div>
    </div>
  </div>
)