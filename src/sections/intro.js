import React from 'react'
// import Section from '../components/section'
import Socials from '../components/socials'

import style from './intro.module.css'


export default () => (
  // <Section title={title} subtitle={subtitle}>

    <section class='row' style={{marginTop: '8rem'}}>
      <div class={style.profile}>
        <img src={require('../images/headshot.jpeg')} alt='Headshot of Bryceson Laing' class={style.headshot} />

        <Socials />
      </div>

      <div class={style.blurb}>
        <h1>Howdy!</h1>

        <p>
          My name is Bryceson Laing. I recently graduated from Texas A&M, and moved from Texas to Portland, OR.<br /><br />
          I am a software engineer seeking opportunities in software and web development.
        </p>
      </div>
    </section>
      
  // </Section>
)