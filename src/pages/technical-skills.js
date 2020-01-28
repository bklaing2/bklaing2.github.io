import { Link } from 'gatsby'
import React from 'react'
import styles from './technical-skills.module.css'

import Layout from '../components/layout'

const Bold = ({ children }) => <span style={{fontWeight: 'bold'}}>{children}</span>


const ProfessionalImage = () => (
  <Layout title='Technical Skills' heading='Looking to hire?' currentPage={1}>

    <div class='row'>
      <div class='container'>
        <div style={{alignItems: 'left', padding: '1rem'}}>

          {/* Overview */}
          <h1>Seeking Internship</h1>
          I would like to participate in summer internships and jobs to apply knowledge from my education and increase my experience in the field of science and technology.<br/><br/>

          <h3>After Graduation</h3>
          I hope to join a top company in the STEM industry working on projects related to Computer Engineering. If you are looking to hire and I meet your qualifications here is my <Link to='/resume/'>resume</Link>!<br/><br/><br/><br/>

          {/* Qualifications */}
          <h2>My Skills</h2>
          I have taken many <Bold>courses</Bold> relating to computer science and electrical engineering. I particularly enjoyed:
          
          <h4>
            <ul>
              <li>Software Development</li>
              <li>Data Structures and Algorithms</li>
              <li>Computer Architecture</li>
            </ul>
          </h4><br/>

          During my research, I have learned many tools for <Bold>data analysis</Bold>:
          
          <h4>
            <ul>
              <li>Handling big data using (Python, Pandas, NumPy)</li>
              <li>Online change detection of IMU data on a smartwatch (Java)</li>
              <li>Data manipulation (filtering, downsampling, etc)</li>
            </ul>
          </h4><br/>

          I have developed skills from my <Bold>personal projects</Bold>:
          
          <h4>
            <ul>
              <li>Quickly learning new technologies (React Native, Firebase, etc)</li>
              <li>Being organized as a team to be as efficient as possible</li>
              <li>Creating a product from conceptualization to production</li>
            </ul>
          </h4><br/>
        </div>
      </div>

      <iframe src="/resume-bryceson-laing.pdf"
        allowtransparency="true"
        // style={{ width: '50%', height: 'auto', border: 'none' }}>
        style={{ width: '50%', height: '100%', minHeight: 500, border: 'none', alignSelf: 'center' }}>
      </iframe>
    </div>
  </Layout>
)

export default ProfessionalImage
