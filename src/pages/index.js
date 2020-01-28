import { Link } from 'gatsby'
import React from 'react'
import indexStyles from './index.module.css'

import Layout from '../components/layout'


const IndexPage = () => (
  <Layout>
    <div class='row'>
      <div class='container' style={{flexDirection: 'row'}}>
        <div style={{width: '50%', alignItems: 'left', padding: '1rem'}}>
          <h1>Howdy!</h1>
          I am a Computer Engineering student at <a href='https://www.tamu.edu/'>Texas A&amp;M University</a>.<br/>
          This website is a personal project of mine. I wanted to learn some web development, and it was important to me that the end result be something meaningful.<br/><br/>
          Feel free to take a look around!<br/><br/>

          <h3>After Graduation</h3>
          I am seeking a job in Computer Engineering or related fields. You can find more information <Link to='/technical-skills/'>here</Link> about my qualifications.<br/>
          If you are looking to hire, I would appreciate being considered. Here's my <Link to='/resume/'>resume</Link>!<br/><br/><br/>

          <h2 class='secondary'>- Bryceson Laing</h2>
        </div>
        <div class={`${indexStyles.headshot}`}></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
