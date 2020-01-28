import React from 'react'
import portfolioStyles from './portfolio.module.css'
import { FaMobileAlt, FaClock } from 'react-icons/fa';

import Layout from '../components/layout'
import Row from '../components/Row'


let app = {
  hidden: <div>
    <h4>I created an application to serve as a centralized marketplace for selling student sporting tickets.</h4>
    One summer I wanted to learn some web development, so I made a little website. It was geared towards A&amp;M students to sell their football tickets because there wasn't an easy way of doing so. I got eighty users on it by just telling a few friends to spread the word.<br/><br/>
    I then joined <a href='https://engineering.tamu.edu/student-life/eep/engineering-incubator/index.html'>Engineering Inc.</a> and met two people who were working on the same idea, but as an app. Eager to learn app development and work with others on this project, we teamed up and created College Cove. It launched in the fall of 2019 and we encountered 750+ users!<br/><br/>
    We used React Native and Firebase to quickly and easily deploy to iOS and Android.
  </div>,
  icon: <FaMobileAlt />,
  title: 'College Cove',
}

let watch = {
  hidden: <div>
    <h4>I utilized IMU and BLE data from a smartwatch to perform online change detection and aid in data collection for activity classifiers.</h4>
    I tested many different change detection algorithms in Python using NumPy and Pandas. In the end, none of them were suitable for the needs of the app so I developed an original algorithm.<br/><br/>
    The app used accelerometer, gyroscope, and Bluetooth data to detect when the user changed activities and reminded the user to log the activity. This made collecting data to train activity classifiers easier and generated cleaner data, thus resulting in the classifiers being more accurate.<br/><br/>
    The app was written in Java and deployed on a Polar Watch.
  </div>,
  icon: <FaClock />,
  title: 'Data Collection App',
}


const Portfolio = () => (
  <Layout title='Portfolio' heading='A brief showcase of what I have done' currentPage={2}>
    <span style={{alignSelf: 'center'}}>Hover over the icons for more info</span>

    <Row hidden={app.hidden} icon={app.icon} title={app.title} />
    <Row hidden={watch.hidden} icon={watch.icon} title={watch.title} />

  </Layout>
)

export default Portfolio