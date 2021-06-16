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
    <Experience />
    <Projects />
    <Other />
  </Layout>
)

export default IndexPage