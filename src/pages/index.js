import React from 'react'

import Layout from '../components/layout'

import Intro from '../sections/intro'
import Education from '../sections/education'
import Experience from '../sections/experience'
import Projects from '../sections/projects'
import Other from '../sections/other'


const IndexPage = () => (
  <Layout>
    <Intro />
    <Education />

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',

      width: '100%',

      marginTop: '16rem',
      fontSize: '2rem',
    }}>
      <p>Hover over the icons to see more info!</p>
    </div>

    <Experience />
    <Projects />
    {/* <Other /> */}
  </Layout>
)

export default IndexPage
