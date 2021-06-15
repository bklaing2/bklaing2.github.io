import React from 'react'
import resumeStyles from './resume.module.css'

import Layout from '../components/layout'


const Resume = () => (
  <Layout>
    <iframe src="/resume_bryceson-laing.pdf"
      allowtransparency="true"
      style={{ width: '100%', minHeight: 1250, border: 'none', alignSelf: 'center' }}>
    </iframe>
  </Layout>
)

export default Resume
