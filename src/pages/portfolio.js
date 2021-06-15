import React from 'react'
import portfolioStyles from './portfolio.module.css'
import { FaMobileAlt, FaClock } from 'react-icons/fa';

import Layout from '../components/layout'
import Row from '../components/Row'


let app = {
  details: <div>
    <p>
      Co-created an application that revolves around a centralized marketplace for selling student sporting tickets. Streamlined the
      student-to-student ticket selling process, and generated over $4000 of ticket sales. Programmed the app using React Native in
      order to easily deploy to iOS and Android.<br />

      Key Accomplishments:
      <ul>
        <li>Encountered 750+ users during Fall 2019</li>
        <li>Collaborated with cross-functional development team members to analyze potential system solutions based on evolving client requirements</li>
        <li>Partnered with Texas A&#38;M University’s startup incubator, Engineering Inc., in order to procure investors, mentorship, and a collaborative working environment early on</li>
      </ul>
    </p>
    {/* <h4>I created an application to serve as a centralized marketplace for selling student sporting tickets.</h4>
    One summer I wanted to learn some web development, so I made a little website. It was geared towards A&amp;M students to sell their football tickets because there wasn't an easy way of doing so. I got eighty users on it by just telling a few friends to spread the word.<br/><br/>
    I then joined <a href='https://engineering.tamu.edu/student-life/eep/engineering-incubator/index.html'>Engineering Inc.</a> and met two people who were working on the same idea, but as an app. Eager to learn app development and work with others on this project, we teamed up and created College Cove. It launched in the fall of 2019 and we encountered 750+ users!<br/><br/>
    We used React Native and Firebase to quickly and easily deploy to iOS and Android. */}
  </div>,
  icon: <FaMobileAlt />,
  title: 'College Cove',
  subtitle: 'Founder / App Developer'
}

let watch = {
  details: <div>
    <p>
      Utilized IMU and BLE data from a smartwatch to perform online change detection and to aid in data collection for activity
      classifiers. Used Python, NumPy, and Pandas to test many different change detection algorithms, and then implemented the best
      performing algorithm in Java on an Android smartwatch.<br />
      
      Key Accomplishments:
      <ul>
        <li>Analyzed and manipulated large sets of data containingover 1 million data points</li>
        <li>Developed an original change detection algorithm based on the accelerometer, gyroscope, and Bluetooth data from an Android smartwatch</li>
        <li>Implemented the change detection algorithm on the smartwatch to detect when the user has changed activities, and log the times they were participating in certain activities, resulting in the collection of cleaner training data</li>
      </ul>
    </p>
  </div>,
  icon: <FaClock />,
  title: 'Data Collection App',
  subtitle: 'Undergraduate Researcher'
}


const Portfolio = () => (
  <Layout title='Portfolio' heading='A brief showcase of what I have done' currentPage={2}>
    <span style={{alignSelf: 'center'}}>Hover over the icons for more info</span>

    <Row details={app.details} icon={app.icon} title={app.title} subtitle={app.subtitle}/>
    <Row details={watch.details} icon={watch.icon} title={watch.title} subtitle={watch.subtitle}/>

  </Layout>
)

export default Portfolio