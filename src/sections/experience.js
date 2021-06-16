import React from 'react'
import { FaMobileAlt, FaClock } from 'react-icons/fa';
import Section from '../components/section'
import Project from '../components/project'


let title = 'Experience';
let subtitle = 'Testing one two three';

let collegeCove = {
  title: 'Founder / App Developer',
  subtitle: 'College Cove',
  details: <p>
    Co-created an application that revolves around a centralized marketplace for selling student sporting tickets. Streamlined the
    student-to-student ticket selling process, and generated over $4000 of ticket sales. Programmed the app using React Native in
    order to easily deploy to iOS and Android.<br />

    Key Accomplishments:
    <ul>
      <li>Encountered 750+ users during Fall 2019</li>
      <li>Collaborated with cross-functional development team members to analyze potential system solutions based on evolving client requirements</li>
      <li>Partnered with Texas A&#38;M University’s startup incubator, Engineering Inc., in order to procure investors, mentorship, and a collaborative working environment early on</li>
    </ul>
  </p>,
  icon: <FaMobileAlt />,
}

let research = {
  title: 'Undergraduate Researcher',
  subtitle: 'Embedded Signal Processing Lab',
  details: <p>
    Utilized IMU and BLE data from a smartwatch to perform online change detection and to aid in data collection for activity
    classifiers. Used Python, NumPy, and Pandas to test many different change detection algorithms, and then implemented the best
    performing algorithm in Java on an Android smartwatch.<br />

    Key Accomplishments:
    <ul>
      <li>Analyzed and manipulated large sets of data containingover 1 million data points</li>
      <li>Developed an original change detection algorithm based on the accelerometer, gyroscope, and Bluetooth data from an Android smartwatch</li>
      <li>Implemented the change detection algorithm on the smartwatch to detect when the user has changed activities, and log the times they were participating in certain activities, resulting in the collection of cleaner training data</li>
    </ul>
  </p>,
  icon: <FaClock />,
}

let peerMentor = {
  title: 'Engineering Peer Mentor',
  subtitle: 'Texas A&M University',
  details: <p>
    <ul>
      <li>Mentored over 100 freshmen students through their transition from high school to college</li>
      <li>Assisted the College of Engineering with over 10 events concerning representation and diversity</li>
      <li>Led activities that developed freshmen students' physical, emotional and social growth</li>
    </ul>
  </p>,
  icon: <FaClock />,
}


export default () => (
  <Section title={title} subtitle={subtitle}>
      
      <Project title={collegeCove.title} subtitle={collegeCove.subtitle} icon={collegeCove.icon}>
        {collegeCove.details}
      </Project>

      <Project title={research.title} subtitle={research.subtitle} icon={research.icon}>
        {research.details}
      </Project>

      <Project title={peerMentor.title} subtitle={peerMentor.subtitle} icon={peerMentor.icon}>
        {peerMentor.details}
      </Project>
  </Section>
)