import { Link } from 'gatsby'
import React from 'react'
import indexStyles from './index.module.css'

import Layout from '../components/layout'

import Intro from '../sections/1-intro'
import Experience from '../sections/2-experience'
import Education from '../sections/3-education'
import Projects from '../sections/4-projects'
import Other from '../sections/5-other'


const IndexPage = () => (
  <Layout>
    <Intro />
    <Experience />
    <Education />
    <Projects />
    <Other />
  </Layout>
)

export default IndexPage
