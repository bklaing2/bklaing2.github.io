import { Link } from 'gatsby'
import React from 'react'
import indexStyles from './index.module.css'

import Layout from '../components/layout'
import Socials from '../components/socials'


const IndexPage = () => (
  <Layout>
    <div class='row'>
      <div class='container' style={{flexDirection: 'row'}}>
        {/* <div class={`${indexStyles.headshot}`}></div> */}
        <div class='container'>
          <img class={`${indexStyles.headshot}`} src={require('../images/headshot.jpeg')} alt='headshot'></img>
          <Socials />
        </div>


        <div style={{width: '50%', alignItems: 'left', padding: '1rem'}}>
          <h1>Howdy!</h1>

          <p>
            Software Engineer.<br/>
            Bachelor of Science in Computer Engineering from <a href='https://www.tamu.edu/'>Texas A&amp;M University</a>.<br/>
            Currently seeking a job in Software Development. If you are looking to hire, I would appreciate being considered. Here's my <Link to='/resume/'>resume</Link>!<br/>
          </p>

          <p>This website is a personal project of mine. I wanted to learn some web development, and it was important to me that the end result be something meaningful.<br/><br/>
            Feel free to take a look around!</p>

          <h2 class='secondary'>~ Bryceson Laing</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
